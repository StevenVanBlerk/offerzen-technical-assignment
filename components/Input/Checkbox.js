import styled from "styled-components";
import { colors, paddings } from "config";
import { MinimalButton, Container, Typography } from "components";

// Custom Checkbox based on https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
const Box = ({
  className,
  checked,
  label,
  onChange = () => {},
  checkedColor,
  uncheckedColor,
  outlineColor,
  tickColor,
  ...otherProps
}) => {
  return (
    <>
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          checked={checked}
          outlineColor={outlineColor}
          onChange={onChange}
          {...otherProps}
        />
        <StyledCheckbox
          checked={checked}
          checkedColor={checkedColor}
          uncheckedColor={uncheckedColor}
          outlineColor={outlineColor}
        >
          <Icon viewBox="0 0 24 24">
            <polyline
              points="20 6 9 17 4 12"
              style={{ stroke: tickColor, strokeWidth: "2px" }}
            />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </>
  );
};

export const Checkbox = ({
  className,
  checked,
  label,
  onChange = () => {},
  checkedColor = colors.WHITE_ICE,
  uncheckedColor = colors.WHITE,
  outlineColor = colors.SCOOTER,
  tickColor = colors.SCOOTER,
  ...otherProps
}) => {
  return (
    <>
      <MinimalButton>
        <Label>
          <Typography
            fontSize="15px"
            fontFamily="Proxima-Nova-Regular"
            color={colors.JUMBO}
          >
            {label}
          </Typography>
          <Box
            checked={checked}
            onChange={onChange}
            checkedColor={checkedColor}
            uncheckedColor={uncheckedColor}
            outlineColor={outlineColor}
            tickColor={tickColor}
            {...otherProps}
          />
        </Label>
      </MinimalButton>
    </>
  );
};

const Label = styled.label`
  display: flex;
  height: 100%;
  place-items: center;
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckboxContainer = styled((props) => <Container {...props} />)`
  display: inline-block;
  vertical-align: middle;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled((props) => (
  <Container border={`1px solid ${props.outlineColor}`} {...props} />
))`
  margin: 0 0 0 ${paddings.SMALL};
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ checked, checkedColor, uncheckedColor }) =>
    checked ? checkedColor : uncheckedColor};
  border-radius: 3px;
  transition: all 0.15s;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ outlineColor }) => `0 0 0 1px ${outlineColor}`};
  }
  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
