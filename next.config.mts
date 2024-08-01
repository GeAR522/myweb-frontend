import { redirect } from 'next/dist/server/api-utils';

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/main",
        permanent: true,
      }
    ]
  }
}

export default nextConfig;
