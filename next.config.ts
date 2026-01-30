import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hotstartvc-website",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
