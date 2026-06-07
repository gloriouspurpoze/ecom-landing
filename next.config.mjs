/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.menufast.in",
      },
    ],
  },
};

export default nextConfig;
