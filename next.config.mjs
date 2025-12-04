/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'aceternity.com', 'assets.aceternity.com'],
  },
}

export default nextConfig
