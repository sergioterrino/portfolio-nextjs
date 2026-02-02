/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
