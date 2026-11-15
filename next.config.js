/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/how-we-work',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/how-we-source',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/quality',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/capabilities',
        destination: '/work-with-us',
        permanent: true,
      },
      {
        source: '/for-suppliers',
        destination: '/supplier-network',
        permanent: true,
      },
      {
        source: '/suppliers',
        destination: '/supplier-network',
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
