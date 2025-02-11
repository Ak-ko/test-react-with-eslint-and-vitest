import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        browser: {
            enabled: true,
            instances: [{ browser: 'chromium' }],
        },
    },
});
