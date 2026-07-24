import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/modern-education-group',
  assetPrefix: '/modern-education-group',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
