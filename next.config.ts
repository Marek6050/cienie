import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["./iprivate/**"],
  },
};

export default nextConfig;
