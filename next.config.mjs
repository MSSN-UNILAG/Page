// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
    domains: ['ui-avatars.com'],
    }
    // swcMinify: true,
    // Add any other custom configurations here
  };
  
  export default nextConfig;
  