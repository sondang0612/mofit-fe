/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    turbo: {},
  },
  images: {
    domains: ["doublefish-s3-upload.s3.ap-southeast-1.amazonaws.com"],
  },
};

export default nextConfig;
