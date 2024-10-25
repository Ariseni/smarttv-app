/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist",
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/discover",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
