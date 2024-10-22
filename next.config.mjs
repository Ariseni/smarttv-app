/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist", // Changes the build output directory to `./dist/`.
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
