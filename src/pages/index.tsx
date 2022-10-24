import * as React from "react";
import type { HeadFC } from "gatsby";

import { Layout } from "../components/Layout";
import { Box } from "../components/Box/styled.Box";
import { DarkModeToggle } from "../components/DarkMode/DarkModeToggle";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Gatsby Dark Mode Bug</h1>
        <div>
          <DarkModeToggle /> <em>Change theme</em>
        </div>
        <p>
          Changing between themes works fine in development, but once the the
          Gatsby application gets built, the custom component's dark styles
          don't get applied when (re)loading the page.
        </p>
        <Box>
          <p>
            I'm a custom component (Box) and my style should always match the
            rest of the page. I get my styles from a global <code>theme</code>,
            which gets injected by the <code>ThemeProvider</code>.
          </p>
          <p>For example, this is how my background color is defined:</p>
          <code>{"background-color: ${({ theme }) => theme.background};"}</code>
        </Box>
        <p>
          The dark mode for this site was implemented using the{" "}
          <a href="">use-dark-mode</a> React hook and the{" "}
          <a href="https://styled-components.com/docs/advanced#theming">
            styled-components ThemeProvider
          </a>{" "}
          component.
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby Dark Mode Bug</title>;
