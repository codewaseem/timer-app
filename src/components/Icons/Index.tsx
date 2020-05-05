import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Work } from "~/assets/icons/work.svg";
import { ReactComponent as Timer } from "~/assets/icons/timer.svg";
import { ReactComponent as Coffee } from "~/assets/icons/coffee.svg";
import { ReactComponent as Lunch } from "~/assets/icons/lunch.svg";
import { ReactComponent as Leave } from "~/assets/icons/leave.svg";
import { ReactComponent as Exit } from "~/assets/icons/exit.svg";

const StyledIcon = styled.span`
  svg {
    height: 25px;
    width: 25px;
    fill: ${({ theme }) => theme.staticColors.limeGreen};
  }
`;

export const WorkIcon = () => {
  return (
    <StyledIcon>
      <Work />
    </StyledIcon>
  );
};

export const TimerIcon = () => {
  return (
    <StyledIcon>
      <Timer />
    </StyledIcon>
  );
};

export const CoffeeIcon = () => {
  return (
    <StyledIcon>
      <Coffee />
    </StyledIcon>
  );
};

export const LunchIcon = () => {
  return (
    <StyledIcon>
      <Lunch />
    </StyledIcon>
  );
};

export const LeaveIcon = () => {
  return (
    <StyledIcon>
      <Leave />
    </StyledIcon>
  );
};

export const ExitIcon = () => {
  return (
    <StyledIcon>
      <Exit />
    </StyledIcon>
  );
};
