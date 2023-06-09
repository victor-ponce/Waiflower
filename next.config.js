
///** @type {import('next').NextConfig} */
//const nextConfig = {}

//module.exports = nextConfig

//const withPWA = require('next-pwa')({
//    dest: 'public'
//  })
  
//  module.exports = withPWA({
    // next.js config
//  })

/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
  });


  