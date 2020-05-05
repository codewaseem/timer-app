import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const Container = styled.div`
  padding: 36px;
  height: 100%;
`;

const GreetingText = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <GreetingText>Hi, John</GreetingText>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);
