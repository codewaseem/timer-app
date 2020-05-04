import { Theme } from "@emotion/react";

const theme: { day: Theme; night: Theme } = {
  day: {
    colors: {
      sky: "#37d8e6",
      border: "#ffdd00",
      object: "#f1c40f",
    },
  },
  night: {
    colors: {
      sky: "#2c3e50",
      border: "#bdc3c7",
      object: "#eaeff2",
    },
  },
};

export default theme;
