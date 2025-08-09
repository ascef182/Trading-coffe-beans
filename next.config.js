/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "as1.ftcdn.net" },
      { protocol: "https", hostname: "as2.ftcdn.net" },
      { protocol: "https", hostname: "t3.ftcdn.net" },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "date-fns",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
    ],
  },
};

module.exports = nextConfig;
