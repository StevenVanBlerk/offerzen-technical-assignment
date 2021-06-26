import styled from "styled-components";
import { StyledComponent } from "components";

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
