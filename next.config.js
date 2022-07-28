/** @type {import('next').NextConfig} */

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://gocode-shop-next-deploy.vercel.app/";

const nextConfig = {
  reactStrictMode: false,
  server,
};

module.exports = nextConfig;
