import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/about/company', permanent: false },
      { source: '/bsac', destination: '/bsac/intro', permanent: false },
      { source: '/programs', destination: '/programs/experience', permanent: false },
      { source: '/schedule', destination: '/schedule/experience', permanent: false },
      { source: '/facility', destination: '/facility/k26', permanent: false },
      { source: '/reservation', destination: '/reservation/pricing', permanent: false },
      { source: '/community', destination: '/community/notice', permanent: false },
    ];
  },
};

export default nextConfig;
