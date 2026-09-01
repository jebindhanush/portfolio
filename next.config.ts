import type { NextConfig } from "next";
import { siteConfig } from "./lib/site-config";

const isProduction = process.env.NODE_ENV === "production";
const basePath =
  isProduction && siteConfig.repositoryName
    ? `/${siteConfig.repositoryName}`
    : "";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
