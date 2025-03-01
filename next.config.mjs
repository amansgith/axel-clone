import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aaxel.ca',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);