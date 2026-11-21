import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
