import type { NextConfig } from "next";

// Static export for GitHub Pages: no Next.js server, so `headers()` isn't
// supported here — the same security headers are re-applied at the
// Cloudflare edge instead (see deployment notes).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
