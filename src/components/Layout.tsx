import React, { useEffect } from "react";
import useDarkMode from 'use-dark-mode';
import { createGlobalStyle, ThemeProvider } from "styled-components";

// import { useDarkMode } from "./DarkMode/useDarkMode";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const lightColors = {
    font: "#123",
    background: "#DEF",
    border: "#7AC",
  };
  const darkColors = {
    font: "#FED",
    background: "#321",
    border: "#CA7",
  };
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkColors : lightColors;

  console.log("Layout (component):", darkMode.value);

  useEffect(() => {
    console.log("Layout (useEffect):", darkMode.value);
  }, [darkMode.value]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
    border: ${({ theme }) => `1rem solid ${theme.border}`}
  }

  body {
    margin: 0;
    padding: 3rem;
  }

  main {
    margin: 0 auto;
    max-width: 640px;
  }

  h1 {
    margin-top: 0;
  }

  a {
    color: inherit;
  }
`;
