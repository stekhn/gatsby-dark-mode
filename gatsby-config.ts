import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/gatsby-dark-mode`,
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-use-dark-mode"],
};

export default config;
