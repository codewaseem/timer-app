import emotionReact from "@emotion/react";

declare module "@emotion/react" {
  export const { Global, css, ClassNames } = emotionReact;
  export interface Theme {
    colors: {
      background: string;
      cardBackground: string;
      topBG: string;
      textAccent: string;
      text: string;
      toggle: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:

// declare module "@emotion/react" {
//   export interface Theme extends MuiTheme {}
// }
