import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com"
      }
    ],
    // loaderFile: "./src/storyblokImageLoader.js",
    deviceSizes: [640, 750, 828, 1080, 1200, 1504, 1920, 2048, 3840],
    qualities: [70, 75, 85, 95]
  }
};

export default nextConfig;
