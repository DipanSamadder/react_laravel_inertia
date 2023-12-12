import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/dashlitedeae.css',
                'resources/css/themedeae.css',
                'resources/js/bundledeae.js',
                'resources/js/scriptsdeae.js',
                'resources/js/demo-settingsdeae.js',
                'resources/js/gd-analyticsdeae.js',
                'resources/js/jqvmapdeae.js',
            ],
            refresh: true,
        }),
        react(),
    ],
});
