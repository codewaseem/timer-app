import React, { ReactNode, useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";

import theme from "~/theme";
import { setCSSVariables } from "../../utils/styles";

/**
 * This component exists to provide a reusable application wrapper for use in Gatsby API's, testing, etc.
 */
const App = ({ element }: { element: ReactNode }) => {
  const [themeName, setThemeName] = useState<keyof typeof theme>("dark");
  const [currentTheme, setTheme] = useState(theme[themeName]);

  const toggleTheme = () => {
    if (themeName === "light") {
      setTheme(theme.dark);
      setThemeName("dark");
    } else {
      setTheme(theme.light);
      setThemeName("light");
    }
  };

  useEffect(() => {
    setCSSVariables(currentTheme.colors);
  });

  return (
    <ThemeProvider
      theme={{
        ...currentTheme,
        toggleTheme,
      }}
    >
      {element}
    </ThemeProvider>
  );
};

export default App;
