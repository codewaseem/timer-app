import React from "react";

import GlobalStyles from "./GlobalStyles";

type Props = {};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default DefaultLayout;
