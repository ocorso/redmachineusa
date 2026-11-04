import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // optional if images are unoptimized for static export:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
