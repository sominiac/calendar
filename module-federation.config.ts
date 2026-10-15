import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
    name: 'calendar',
    manifest: true,
    exposes: {
        './export-app': './src/export-App.tsx',
    },
});