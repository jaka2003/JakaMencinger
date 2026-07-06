/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Statični export – zgradi mapo "out/" s čistim HTML/CSS/JS.
  // Idealno za Cloudflare Pages / Netlify / kateri koli static hosting (brez serverja).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
