import styled from "styled-components";
import { StyledComponent } from "components";
import { colors, paddings } from "config";

// The minimalist button that still features a tabbable outline
export const MinimalButton = styled((props) => (
  <StyledComponent as="button" {...props} />
))`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    &:not(:focus-visible) {
      outline: none;
    }
  }
`;

export const MinimalInput = styled((props) => (
  <StyledComponent as="input" {...props} />
))`
  font-family: ${({ fontFamily }) => fontFamily || "Proxima-Nova-Regular"};
  color: ${({ color }) => color || colors.JUMBO};
  border: ${({ border }) => border || "none"};
  outline: ${({ outline }) => outline || "none"};
  cursor: ${({ cursor }) => cursor || "auto"};

  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || colors.GRAY_CHATEAU};
  }
`;
