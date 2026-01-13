import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.manipaldubai.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'manipalblobstorage.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nmims.edu',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'edukyu.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'collegesgyan.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gcetl.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'motion.ac.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
