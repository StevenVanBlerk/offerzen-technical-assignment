import styled from "styled-components";
import { colors, FONT_SIZE } from "config";
import { StyledComponent } from "components";
export const Typography = styled((props) => (
  <StyledComponent as="p" {...props} />
))`
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ fontFamily }) => fontFamily || "Proxima-Nova-Regular"};
  color: ${({ color }) => color || colors.OXFORD_BLUE};
  font-size: ${({ fontSize }) => fontSize || FONT_SIZE};
`;
