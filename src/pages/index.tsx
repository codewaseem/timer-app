import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Header from "../components/Header";

// const cssVariables = {
//   paddingTop: `40px`,
//   paddingSide: `25px`,
//   paddingBottom: `45px`,
//   gapLarge: `25px`,
//   gapSmall: `15px`,
//   limeGreen: `hsl(163, 72%, 41%)`,
//   brightRed: `hsl(356, 69%, 56%)`,
//   facebook: `hsl(195, 100%, 50%)`,
//   twitter: `hsl(203, 89%, 53%)`,
//   instagram: `linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))`,
//   youtube: `hsl(348, 97%, 39%)`,
// };

const Page = styled.div`
  --container-padding-top: 40px;
  --container-padding-side: 25px;
  --container-padding-bottom: 45px;
  --card-gap-large: 25px;
  --card-gap-small: 15px;
  --lime-green: hsl(163, 72%, 41%);
  --bright-red: hsl(356, 69%, 56%);
  --facebook: hsl(195, 100%, 50%);
  --twitter: hsl(203, 89%, 53%);
  --instagram: linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  --youtube: hsl(348, 97%, 39%);



  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO />
      <Page>
        <Header />
      </Page>
    </Layout>
  );
};

export default injectIntl(Index);
