/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/budgetbuddylive/:path*',
        destination: 'https://budgetbuddylive-emegs13dj-turnerpeters-6002s-projects.vercel.app/:path*',
      },
    ];
  },
}

export default nextConfig
