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
        destination:
          'https://budgetbuddylive-cxq36dgsj-turnerpeters-6002s-projects.vercel.app/:path*',
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
            key: 'Original-Host',
            value: 'jtpnexus.com',
          },
        ],
      },
    ];
  },
}

export default nextConfig
