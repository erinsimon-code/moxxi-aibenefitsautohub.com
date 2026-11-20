import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/tips",
        destination: "/benefits",
        permanent: true,
      },
      {
        source: "/compare",
        destination: "/plan-guide",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/enroll",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

