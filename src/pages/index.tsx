import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const Sky = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.sky};
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background-color 3s ease;
`;

const SkyObject = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.object};
  cursor: pointer;
  border: 20px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-width: 10px;
  }
`;

const Text = styled.h1``;

const Index: React.FC<InjectedIntlProps> = () => {
  const { themeName, toggleTheme } = useTheme();
  return (
    <Layout>
      <SEO />
      <Sky>
        <Text>{themeName} is shining</Text>
        <SkyObject onClick={toggleTheme} />
      </Sky>
    </Layout>
  );
};

export default injectIntl(Index);
