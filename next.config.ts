import type { NextConfig } from "next";
import { env } from "./lib/env";

const isProd = env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  turbopack: {},
  reactStrictMode: true,
  reactCompiler: isProd,

  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],

  experimental: {
    inlineCss: isProd,
    optimizePackageImports: [
      "@phosphor-icons/react",
      "motion",
      "class-variance-authority",
    ],
  },

  ...(isProd && {
    compiler: {
      removeConsole: {
        exclude: ["error"],
      },
    },
  }),
  logging: {
    fetches: {},
  },
};

export default nextConfig;