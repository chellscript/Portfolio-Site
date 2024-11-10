module.exports = {
  siteUrl: process.env.SITE_URL || "https://chellscript.dev",
  generateRobotsTxt: true,
  changefreq: "yearly",
  priority: 0.7,
  sitemapSize: 1,
  generateRobotsTxt: true,
  generate: process.env.VERCEL_ENV === "production",
};
