import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import { StaticColors } from "../@types/emotion";
import { WorkIcon } from "../components/Icons/Index";

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

const HomeTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 210px));
  grid-gap: 25px;
  padding: 25px 0;
`;

const Card = styled.div<{
  topColor?: keyof StaticColors;
}>`
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: ${({ theme, topColor }) =>
      theme.staticColors[topColor || "limeGreen"]};
  }
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-gap: 15px;
  // justify-items: center;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  grid-gap: 15px;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textAccent};
`;
const Time = styled.div`
  font-size: 36px;
  line-height: 1;
  font-weight: bold;
`;
const Hours = styled.span``;
const Minutes = styled.span``;
const Seconds = styled.span`
  font-size: 1rem;
  font-weight: normal;
  vertical-align: 3px;
  color: ${({ theme }) => theme.colors.textAccent};
`;

const MainContent = styled.div`
  text-align: center;
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.textAccent};
  opacity: 0.8;
  font-size: 0.9rem;
  text-align: center;
`;
const Timer = styled.div``;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <GreetingText>Hi, John</GreetingText>
        <HomeTilesContainer>
          <Card>
            <Title>
              <WorkIcon /> Work
            </Title>
            <MainContent>
              <Time>
                <Hours>00</Hours>
                <Minutes>:30</Minutes>
                <Seconds>:59</Seconds>
              </Time>
              <Summary>Worked Today</Summary>
            </MainContent>
            <Timer>f</Timer>
          </Card>
          <Card />
          <Card />
          <Card />
          <Card />
        </HomeTilesContainer>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);
