const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Ensure this is correctly set or omitted
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        port: "",
        pathname: "**",
      },
    ],
  },
};
