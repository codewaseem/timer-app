import React from "react";
import { Global, css } from "@emotion/react";
import { normalize } from "polished";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${normalize()}
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        html,
        body {
          font-family: "Inter", sans-serif;
          box-sizing: border-box;
          font-size: 14px;
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
