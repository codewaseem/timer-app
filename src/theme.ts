import { Theme } from "@emotion/react";

const theme: { light: Theme; dark: Theme } = {
  light: {
    colors: {
      background: "ghostwhite",
      cardBackground: "hsl(227, 47%, 96%)",
      topBG: "hsl(225, 100%, 98%)",
      toggle: "hsl(230, 22%, 74%)",
      textAccent: "hsl(228, 12%, 44%)",
      text: "#2A292D",
    },
  },
  dark: {
    colors: {
      background: "#2A292D",
      cardBackground: "hsl(228, 28%, 20%)",
      topBG: "hsl(232, 19%, 15%)",
      toggle:
        "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      textAccent: "hsl(228, 34%, 66%)",
      text: "white",
    },
  },
};

export default theme;
