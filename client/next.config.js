 /** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        esmExternals: true,
    },
    compiler: {
        styledComponents: true,
    },
    // webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }

        return config
    }
};

module.exports = nextConfig