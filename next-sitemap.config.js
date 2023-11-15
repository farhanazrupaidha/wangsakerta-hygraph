/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.yayasanwangsakerta.org/',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000
}