import styled from "styled-components";
import { colors } from "config";
import { StyledComponent } from "components";

//Flexible container that acts as the foundation for all containers
export const Container = styled((props) => (
  <StyledComponent as="div" {...props} />
))``;

//------GRIDS------\\
export const Grid = styled(Container)`
  display: grid;
`;
export const FlowingGrid = styled(Grid)`
  //minmax only matters for extreme edge case of extremely narrow screen
  grid-template-columns: ${({ columnMaxWidth = "250px" }) =>
    `repeat(auto-fit, minmax(0px, ${columnMaxWidth}))`};

  grid-gap: ${({ gridGap }) => gridGap || "1rem"};
  /* using max-width to allow for specifying a max column count (optional) */
  max-width: ${({ maxColumns, columnMaxWidth, gridGap = "1rem" }) =>
    maxColumns
      ? `calc((${columnMaxWidth} * ${maxColumns}) + (${gridGap} * (${maxColumns} - 1)))`
      : undefined};
`;

//------FLEX CONTAINERS------\\
const FlexContainer = styled(Container)`
  display: flex;
`;
export const VContainer = styled(FlexContainer)`
  flex-direction: column;
`;
export const HContainer = styled(FlexContainer)`
  flex-direction: row;
`;
