/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/capabilities',
        destination: '/quality',
        permanent: true,
      },
      {
        source: '/suppliers',
        destination: '/for-suppliers',
        permanent: true,
      },
      {
        source: '/confidentiality',
        destination: '/client-confidentiality',
        permanent: true,
      },
      {
        source: '/disclaimer',
        destination: '/legal-disclaimer',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/#contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
