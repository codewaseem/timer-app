import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

type Props = {};

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  position: relative;
`;

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      {children}
    </Container>
  );
};

export default DefaultLayout;
