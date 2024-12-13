import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'medicaldialougearticleimages.s3.amazonaws.com'],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: '*' },
          { key: "Access-Control-Allow-Methods", value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: "Access-Control-Allow-Origin", value: '*' },
          { key: "Access-Control-Allow-Headers", value: '*' }
        ]
      }
    ]
  },
  // output: 'standalone', // Enable standalone output
  // experimental: {
  //   // Enable if needed
  //   // appDir: true,
  // },
  // // Required for Docker build
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // Don't resolve 'fs' module on the client to prevent this error on build:
  //     // https://github.com/vercel/next.js/issues/7755
  //     config.resolve.fallback = { fs: false };
  //   }
  //   return config;
  // },
};

export default nextConfig;
