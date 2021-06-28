import styled from "styled-components";
import { colors, FONT_SIZE } from "config";
import { StyledComponent } from "components";

// Basic Typography used for all text
export const Typography = styled((props) => (
  <StyledComponent as="p" {...props} />
))`
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ fontFamily }) => fontFamily || "Proxima-Nova-Regular"};
  color: ${({ color }) => color || colors.JUMBO};
  font-size: ${({ fontSize }) => fontSize || FONT_SIZE};
`;
