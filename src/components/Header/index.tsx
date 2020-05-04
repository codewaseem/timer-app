import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.topBG};
  padding: var(--container-padding-top) var(--container-padding-side)
    var(--container-padding-bottom);
  h1 {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.textAccent};
    margin-bottom: 25px;
    font-size: 1rem;
  }
`;
const ThemeToggleContainer = styled.div`
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.textAccent};
  color: ${({ theme }) => theme.colors.textAccent};
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleButton = styled.button<{
  isChecked: boolean;
}>`
  display: inline-block;
  height: 24px;
  width: 50px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.toggle};
  padding: 2px;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 50%;
    position: relative;
    transition: transform 0.2s ease-in;
    transform: translateX(${({ isChecked }) => (isChecked ? `12px` : `-12px`)});
  }
`;

export default function Header() {
  const [isChecked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((checked) => !checked);
  const { toggleTheme } = useTheme();
  return (
    <StyledHeader>
      <hgroup>
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,004</h3>
      </hgroup>
      <ThemeToggleContainer>
        <span>Dark Mode</span>
        <ToggleButton
          isChecked={isChecked}
          onClick={() => {
            toggleChecked();
            toggleTheme();
          }}
        />
      </ThemeToggleContainer>
    </StyledHeader>
  );
}
