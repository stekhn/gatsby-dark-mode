import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Gatsby Dark Mode Demo",
    siteUrl: "https://github.com/stekhn/gatsby-dark-mode",
  },
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-use-dark-mode"],
};

export default config;
