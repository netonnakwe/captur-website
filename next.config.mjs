/** @type {import('next').NextConfig} */
export const nextConfig = {};

// export nextConfig;

export const images = {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  }