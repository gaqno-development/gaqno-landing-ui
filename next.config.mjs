/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'aceternity.com', 'assets.aceternity.com'],
  },
}

export default nextConfig
