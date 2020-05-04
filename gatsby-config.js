require("dotenv").config({
  path: ".env",
});

const supportedLanguages = require("./src/utils/i18n/supportedLanguages");

const languages = supportedLanguages.map((language) => language.languageTag);

const siteUrl = "localhost:8000";

const basePlugins = [
  "gatsby-plugin-emotion",
  "gatsby-plugin-typescript",
  "gatsby-plugin-react-helmet-async",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-svgr",
  {
    resolve: "gatsby-plugin-intl",
    options: {
      path: `${__dirname}/src/locales`,
      languages: ["en"],
      defaultLanguage: "en",
      redirect: false,
    },
  },
];

const devPlugins = ["gatsby-plugin-remove-serviceworker"];

const prodPlugins = [
  {
    resolve: "gatsby-plugin-react-helmet-canonical-urls",
    options: {
      siteUrl,
    },
  },
  {
    resolve: "gatsby-plugin-intl",
    options: {
      path: `${__dirname}/src/locales`,
      languages,
      defaultLanguage: "en",
      redirect: false,
    },
  },
  "gatsby-plugin-sitemap",
  "gatsby-plugin-robots-txt",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Dine By CodeWaseem",
      short_name: "Dine",
      start_url: "/",
      background_color: "#2A292D",
      theme_color: "#2A292D",
      display: "minimal-ui",
      icon: "static/logos/logo@4x.png", // This path is relative to the root of the site.
    },
  },
  "gatsby-plugin-offline",
];

const plugins = [...basePlugins];

if (process.env.NODE_ENV === "production") {
  console.log("adding gatsby prod plugins");
  plugins.push(...prodPlugins);
} else {
  console.log("adding gatsby dev plugins");
  plugins.push(...devPlugins);
}

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === "1") {
  plugins.push("gatsby-plugin-webpack-bundle-analyser-v2");
}

module.exports = {
  siteMetadata: {
    title: "DineCity",
    description:
      "Gatsby, Frontend, Fullstack, HTML5, CSS3, JavaScript, React, Waseem Ahmed",
    keywords:
      "Gatsby, Frontend, Fullstack, HTML5, CSS3, JavaScript, React, Waseem Ahmed",
    siteUrl,
    lang: "en",
  },
  plugins,
};
