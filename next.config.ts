import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
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
  async rewrites() {
    return [
      {
        source: '/amity-university-online',
        destination: '/universities/amity-university',
      },
      {
        source: '/amity-univeristy-online',
        destination: '/universities/amity-university',
      },
      {
        source: '/uttaranchal-university-online',
        destination: '/universities/uttaranchal-university',
      },
      {
        source: '/sikkim-manipal-university-online',
        destination: '/universities/sikkim-manipal-university',
      },
      {
        source: '/manipal-university-jaipur-online',
        destination: '/universities/manipal-university-jaipur',
      },
      {
        source: '/mit-university-online',
        destination: '/universities/mit-university',
      },
      {
        source: '/mangalayatan-university-online',
        destination: '/universities/mangalayatan-university',
      },
    ];
  },
};

export default nextConfig;
