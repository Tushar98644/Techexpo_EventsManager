/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mdbcdn.b-cdn.net'],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
};

export default nextConfig;
