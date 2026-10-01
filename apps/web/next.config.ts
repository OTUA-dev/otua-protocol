import type { NextConfig } from 'next';

/**
 * OTUA Protocol — Next.js configuration.
 *
 * Foundation phase: minimal configuration.
 * Extend this file as application features are introduced in future phases.
 */
const nextConfig: NextConfig = {
  // Enforce strict React mode.
  reactStrictMode: true,

  // TypeScript and ESLint errors fail the build in CI.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
