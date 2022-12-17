/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Change to false

  images: {               // NEW
    unoptimized: true,    // NEW
  },                      // NEW
}

module.exports = nextConfig
