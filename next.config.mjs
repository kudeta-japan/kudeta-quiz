import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
  },
};

export default withMDX(nextConfig);
