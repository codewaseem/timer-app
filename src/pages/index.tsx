import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const StyledH1 = styled.h1`
  color: blue;
`;

const Container = styled.div`
  ${StyledH1} {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <StyledH1>Hello, World</StyledH1>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);
