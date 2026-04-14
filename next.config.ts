import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ext.waabi.ai",
      },
    ],
  },
};

export default nextConfig;
