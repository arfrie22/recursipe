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
            {
                in: 'src/static/favicon.ico',
                out: 'favicon',
            },
            {
                in: 'src/public/index.html',
                out: 'index',
            },
            {
                in: 'src/public/base.css',
                out: 'base',
            },
            {
                in: 'src/public/index.ts',
                out: 'index',
            },
            {
                in: 'src/public/editor/index.html',
                out: 'editor/index',
            },
            {
                in: 'src/public/editor/index.ts',
                out: 'editor/index',
            },
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