import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // domains: ["images.unsplash.com"],

        unoptimized: true, // Disables Next.js image optimization
    },
};

export default nextConfig;
