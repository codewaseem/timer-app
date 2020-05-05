import styled from "@emotion/styled";

const ToggleButton = styled.button<{
  isChecked: boolean;
}>`
  display: inline-block;
  height: 24px;
  width: 50px;
  border: none;
  border-radius: 20px;
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.staticColors.limeGreen : theme.colors.toggle};
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
    transform: translateX(
      ${({ isChecked }) => (isChecked ? `12.5px` : `-12.5px`)}
    );
  }
`;

export default ToggleButton;
