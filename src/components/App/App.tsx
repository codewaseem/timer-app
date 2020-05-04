import React, { ReactNode, useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";

import theme from "~/theme";

function setCSSVariables(variables: { [key: string]: string }) {
  const keys = Object.keys(variables);
  keys.forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, variables[key]);
  });
}

/**
 * This component exists to provide a reusable application wrapper for use in Gatsby API's, testing, etc.
 */
const App = ({ element }: { element: ReactNode }) => {
  const [themeName, setThemeName] = useState<keyof typeof theme>("day");
  const [currentTheme, setTheme] = useState(theme[themeName]);

  const toggleTheme = () => {
    if (themeName === "day") {
      setTheme(theme.night);
      setThemeName("night");
    } else {
      setTheme(theme.day);
      setThemeName("day");
    }
  };

  useEffect(() => {
    setCSSVariables(currentTheme.colors);
  });

  return (
    <ThemeProvider
      theme={{
        ...currentTheme,
        themeName: themeName === "day" ? "Sun" : "Moon",
        toggleTheme,
      }}
    >
      {element}
    </ThemeProvider>
  );
};

export default App;
