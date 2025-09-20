/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    eslint: {
        dirs: ['src', 'tools']
    }
};

export default nextConfig;
