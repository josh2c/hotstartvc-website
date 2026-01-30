import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hotstartvc-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
