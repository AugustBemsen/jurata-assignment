module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["duckduckgo.com"],
  },

  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  trailingSlash: true,
};
