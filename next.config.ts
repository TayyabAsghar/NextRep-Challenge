import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/7.x/lorelei/svg/**',
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVGs to be used with the Image component
  },
};

export default nextConfig;
