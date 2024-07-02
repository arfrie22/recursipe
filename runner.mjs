//@ts-check

import chokidar from 'chokidar';
import * as esbuild from 'esbuild';
import postCssPlugin from '@deanc/esbuild-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { spawn } from 'child_process';
import glob from 'fast-glob';

async function buildServer() {
    await esbuild.build({
        entryPoints: ['src/server/index.ts'],
        bundle: true,
        outfile: 'dist/index.cjs',
        platform: 'node',
        format: 'cjs',
    });
}


async function buildFrontend() {
    const entryPoints = [
        {
            in: 'src/static/favicon.ico',
            out: 'static/favicon',
        },
        {
            in: 'src/public/base.css',
            out: 'public/base',
        },
    ];

    await glob('src/public/**/index.ts', {onlyFiles: false}).then((files) => {
        for (const file of files) {
            const out = file.replace('src/public/', 'public/').replace('.ts', '');
            entryPoints.push({
                in: file,
                out,
            });
        }
    });

    await glob('src/public/views/**/*.hbs', {onlyFiles: true}).then((files) => {
        for (const file of files) {
            const out = file.replace('src/public/', '').replace('.hbs', '');
            entryPoints.push({
                in: file,
                out,
            });
        }
    });

    await esbuild.build({
        entryPoints,
        loader: {
            ".hbs": "copy",
            ".ico": "copy",
        },
        plugins: [
            postCssPlugin({
                //@ts-ignore
                plugins: [autoprefixer, tailwindcss],
            }),
        ],
        bundle: true,
        outdir: 'dist',
        platform: 'browser',
    });
}

function serve() {
    return spawn('node', ['dist/index.cjs'], {stdio: 'inherit'});
}

async function watch() {
    let running = false;
    let server = null;
    const watcher = chokidar.watch('./src', {persistent: true});
    watcher.add('./tailwind.config.js');
    watcher.add('./.env');
    watcher.on('all', async (event, path) => {
        if (running) return;
        console.log('Rebuilding...');
        running = true;
        if (server) {
            server.kill();
        }
        try {
        await buildServer();
        await buildFrontend();
        server = serve();
        } catch (error) {
            console.error('Error:', error);
        }
        running = false;
    });

    watcher.on('error', (error) => {
        console.error('Error:', error);
    });

    await new Promise(() => {});
}



const prog = process.argv[2];
switch (prog) {
    case 'build:server':
        buildServer();
        break;
    case 'build:frontend':
        buildFrontend();
        break;
    case 'build':
        buildServer();
        buildFrontend();
        break;
    case 'watch':
        await watch();
        break;
    case 'serve':
        serve();
        break;
    default:
        console.log('Invalid argument');
        break;
}