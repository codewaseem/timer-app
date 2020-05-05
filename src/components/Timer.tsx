import React from "react";
import styled from "@emotion/styled";
import ToggleButton from "./ToggleButton";

const TimerContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-items: center;
`;

const Time = styled.div`
  font-size: 44px;
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
const TimerState = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 15px;
  align-items: center;
  font-size: 0.9rem;

  span {
    color: ${({ theme }) => theme.colors.textAccent};
    font-weight: bold;
  }
`;

const zeroPad = (number: number) => (number < 9 ? `0${number}` : number);

const Timer: React.FC<{
  toggleActive: () => void;
  isActive: boolean;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  summaryText?: string;
}> = ({
  toggleActive = () => {},
  isActive = false,
  time = { hours: 0, minutes: 0, seconds: 0 },
  summaryText,
}) => {
  return (
    <TimerContainer>
      <MainContent>
        <Time>
          <Hours>{zeroPad(time.hours)}</Hours>
          <Minutes>:{zeroPad(time.minutes)}</Minutes>
          <Seconds>:{zeroPad(time.seconds)}</Seconds>
        </Time>
        {summaryText && <Summary>{summaryText}</Summary>}
      </MainContent>
      <TimerState>
        <ToggleButton onClick={toggleActive} isChecked={isActive} />
        <span>{isActive ? "ON" : "OFF"}</span>
      </TimerState>
    </TimerContainer>
  );
};

export default Timer;
