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
  async headers() {
    return [
      {
        source: '/budgetbuddylive/:path*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'jtpnexus.com',
          },
          {
            key: 'X-Original-Host',
            value: 'jtpnexus.com',
          },
        ],
      },
    ];
  },
}

export default nextConfig
