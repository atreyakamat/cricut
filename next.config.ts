import type { NextConfig } from "next";

// A pure static site: the sheet maker runs entirely in the browser, so the
// build is plain files that nginx serves. No server, no database, no login.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
