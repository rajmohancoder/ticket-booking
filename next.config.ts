/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures correct path resolution
};

module.exports = nextConfig;