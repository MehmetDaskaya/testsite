/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "future.codobilisim.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
