import styled from "styled-components";

export const StyledComponent = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};

  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};

  grid-gap: ${({ gridGap }) => gridGap};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-self: ${({ justifySelf }) => justifySelf};
  place-content: ${({ placeContent }) => placeContent};
  place-self: ${({ placeSelf }) => placeSelf};
  background: ${({ background }) => background};
  opacity: ${({ opacity }) => opacity};

  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};

  word-wrap: ${({ wordWrap }) => wordWrap};
  vertical-align: ${({ verticalAlign }) => verticalAlign};

  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};

  transform: ${({ transform }) => transform};
`;
