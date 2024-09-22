// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    css: {
        modules: true, // Enable CSS Modules
    },
    server: {
        // host: 'duarte-seabra.localtest.me',
        host: '0.0.0.0',
    },
    build: {
        chunkSizeWarningLimit: 1000, // Set the limit to a different value
        assetsInlineLimit: 4096, // Set the limit for inlining assets
        // terserOptions: {
        //     compress: {
        //         // eslint-disable-next-line camelcase
        //         drop_console: true,
        //     },
        //     // You can add other Terser options here
        // },
    },
    optimizeDeps: {
        include: ['url-loader'],
    },
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        publicPath: '/images',
                        esModule: false,
                    },
                },
            ],
        },
    ],
});
