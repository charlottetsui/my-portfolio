import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Protected image sources need the browser's session cookie; the optimizer
  // deliberately does not forward authentication headers to its source fetch.
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/work", destination: "/", permanent: true },
      ...["sas", "centible", "campusnav", "bytenotes"].map((project) => ({
        source: `/work/${project}`,
        destination: `/${project}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
