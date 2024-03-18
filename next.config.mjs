/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.noroff.dev'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
