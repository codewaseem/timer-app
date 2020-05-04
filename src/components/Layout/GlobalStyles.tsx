import React from "react";
import { Global, css } from "@emotion/react";
import { normalize } from "polished";
import livvicBold from "~/assets/fonts/Livvic-Bold.ttf";
import livvicSemiBold from "~/assets/fonts/Livvic-SemiBold.ttf";
import livvicMediumItalic from "~/assets/fonts/Livvic-MediumItalic.ttf";
import livvicRegular from "~/assets/fonts/Livvic-Regular.ttf";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${normalize()}
        @font-face {
          font-family: "Levvic Bold";
          src: url(${livvicBold}) format("truetype");
        }

        @font-face {
          font-family: "Levvic SemiBold";
          src: url(${livvicSemiBold}) format("truetype");
        }
        @font-face {
          font-family: "Levvic Medium Italic";
          src: url(${livvicMediumItalic}) format("truetype");
        }

        @font-face {
          font-family: "Levvic";
          src: url(${livvicRegular}) format("truetype");
        }

        html,
        body {
          font-family: "Levvic SemiBold", serif;
          box-sizing: border-box;
          font-size: 16px;
        }

        body *,
        body *:before,
        body *:after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;
