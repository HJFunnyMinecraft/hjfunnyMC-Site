/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'mc.hjfunny.site',
              port: '',
              pathname: '/**',
          },
      ],
      unoptimized: true
  },
  output: 'export',
};

module.exports = nextConfig;
