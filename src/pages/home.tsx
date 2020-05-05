import React, { useState } from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import { StaticColors } from "../@types/emotion";
import {
  WorkIcon,
  CoffeeIcon,
  LunchIcon,
  LeaveIcon,
  ExitIcon,
} from "../components/Icons/Index";
import Timer from "../components/Timer";

const Container = styled.div`
  padding: 36px;
  height: 100%;
  max-width: 768px;
  margin: auto;
`;

const GreetingText = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.staticColors.limeGreen};
  color: ${({ theme }) => theme.colors.text};
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
  background-color: ${({ theme }) => theme.colors.cardBackground};

  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  grid-gap: 15px;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textAccent};
`;

const ActionButton = styled.button`
  border: 1px solid ${({ theme }) => theme.staticColors.limeGreen};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px 32px;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 7px -2px rgba(0, 0, 0, 0.1);
  }
`;

const Index: React.FC<InjectedIntlProps> = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleChecked = () => setChecked((checked) => !checked);
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
            <Timer
              isActive={false}
              toggleActive={() => {}}
              time={{
                hours: 2,
                minutes: 37,
                seconds: 25,
              }}
              summaryText="Worked Today"
            />
          </Card>
          <Card>
            <Title>
              <LunchIcon /> Lunch
            </Title>
            <Timer
              isActive={isChecked}
              toggleActive={toggleChecked}
              time={{
                hours: 0,
                minutes: 15,
                seconds: 28,
              }}
              summaryText="Lunch Time"
            />
          </Card>
          <Card>
            <Title>
              <CoffeeIcon /> Coffee
            </Title>
            <Timer
              isActive={false}
              toggleActive={() => {}}
              time={{
                hours: 0,
                minutes: 0,
                seconds: 0,
              }}
              summaryText="Coffee Time"
            />
          </Card>
          <Card>
            <Title>
              <LeaveIcon /> Leave
            </Title>

            <ActionButton>Take a Leave</ActionButton>
          </Card>
          <Card>
            <Title>
              <ExitIcon /> Exit
            </Title>

            <ActionButton>Log Off</ActionButton>
          </Card>
        </HomeTilesContainer>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);
