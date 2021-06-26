import styled from "styled-components";
import { colors } from "config";
import { StyledComponent } from "components";
export const Typography = styled((props) => (
  <StyledComponent as="p" {...props} />
))`
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ fontFamily }) =>
    fontFamily || "Rajdhani-Regular, system-ui, sans-serif"};
  color: ${({ color }) => color || colors.SMOKE};
  font-size: ${({ fontSize }) => fontSize || "19px"};
`;
