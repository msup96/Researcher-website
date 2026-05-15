/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
  // ESLint configuration for production builds
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
