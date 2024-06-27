//@ts-check

import chokidar from 'chokidar';
import * as esbuild from 'esbuild';
import postCssPlugin from '@deanc/esbuild-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { ChildProcess, spawn } from 'child_process';

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
    await esbuild.build({
        entryPoints: [
            'src/public/index.html',
            'src/public/index.css',
            'src/public/index.ts',
            'src/public/favicon.ico'
        ],
        loader: {
            ".html": "copy",
            ".ico": "copy",
        },
        plugins: [
            postCssPlugin({
                //@ts-ignore
                plugins: [autoprefixer, tailwindcss],
            }),
        ],
        bundle: true,
        outdir: 'dist/public',
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
    watcher.on('all', async (event, path) => {
        if (running) return;
        console.log('Rebuilding...');
        running = true;
        if (server) {
            server.kill();
        }
        await buildServer();
        await buildFrontend();
        server = serve();
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