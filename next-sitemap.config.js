module.exports = {
  siteUrl: process.env.SITE_URL || "https://chellscript.dev",
  generateRobotsTxt: false,
  changefreq: "yearly",
  priority: 0.7,
  sitemapSize: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        host: "https://chellscript.dev",
        sitemap: "https://chellscript.dev/sitemap.xml",
      },
      {
        userAgent: "*",
        disallow: "/_next/image", // Block all images served through the Next.js image optimization route
      },
    ],
  },
};
