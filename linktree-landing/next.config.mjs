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
          'https://budgetbuddylive-mocha.vercel.app/:path*',
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
