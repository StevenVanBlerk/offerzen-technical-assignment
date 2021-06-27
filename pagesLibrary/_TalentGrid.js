import styled from "styled-components";
import { colors, paddings, shadows } from "config";
import {
  VContainer,
  HContainer,
  Container,
  Grid,
  MinimalButton,
  Typography,
} from "components";

import Image from "next/image";

const columnMaxWidth = "220px"; //this could be a prop if this component to make the component more generic
export const TalentGrid = ({ items }) => {
  const interviewCount = items.length;
  return (
    <>
      <Container overflowX="auto">
        <Container width="fit-content" margin="0 auto">
          <Typography
            color={colors.JUMBO}
            fontWeight="bold"
            textAlign="right"
            padding={`${paddings.DEFAULT} 0`}
          >
            {interviewCount} interview request
            {interviewCount !== 1 ? "s" : undefined}
          </Typography>
          <Container
            boxShadow={shadows.DEFAULT}
            marginBottom="5px" //bandaid fix for bug where boxShadow is cut off at bottom of div
          >
            <TableHeader />
            {items.map((item, key) => (
              <TableRow key={key} item={item} />
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
};

const TableHeader = () => {
  return (
    <>
      <TableRowGrid
        background={colors.ATHENS_GRAY}
        color={colors.OXFORD_BLUE}
        fontFamily="Proxima-Nova-Bold"
      >
        <TableRowGridItem>
          <TableRowText
            color={colors.OXFORD_BLUE}
            fontFamily="Proxima-Nova-Bold"
          >
            Candidate
          </TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText
            color={colors.OXFORD_BLUE}
            fontFamily="Proxima-Nova-Bold"
          >
            Role
          </TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText
            color={colors.OXFORD_BLUE}
            fontFamily="Proxima-Nova-Bold"
          >
            Last communication
          </TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText
            color={colors.OXFORD_BLUE}
            fontFamily="Proxima-Nova-Bold"
          >
            Salary
          </TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText
            color={colors.OXFORD_BLUE}
            fontFamily="Proxima-Nova-Bold"
          >
            Sent by
          </TableRowText>
        </TableRowGridItem>
      </TableRowGrid>
    </>
  );
};
const TableRow = ({ item }) => {
  const {
    archived,
    candidate,
    image,
    last_comms,
    role,
    salary,
    sent_by,
    status,
  } = item;
  const { unread, description: comms_desc, date_time } = last_comms;
  //salary formatting
  const formattedSalary = "R" + salary.toLocaleString("fr"); //"fr" can be removed to allow for salary formatting based on region.

  // date_time formatting
  const timestamp = formatDate(new Date(date_time));
  return (
    <TableRowButton>
      <TableRowGrid width="100%">
        <TableRowGridItem>
          <HContainer background={colors.WHITE} gridGap={paddings.DEFAULT}>
            <Image
              src={image}
              alt={candidate}
              width="35px"
              height="35px"
              layout="fixed" //to-do: look into what layout/dimensions to use
            />
            <TableRowText unread={unread}>{candidate}</TableRowText>
          </HContainer>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText unread={unread}>{role || "-"}</TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <HContainer gridGap={paddings.SMALL}>
            <GreenCircle />
            <TableRowText unread={unread}>{comms_desc}</TableRowText>
            <TableRowText fontSize="12px" color={colors.GRAY_CHATEAU}>
              {timestamp}
            </TableRowText>
          </HContainer>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText unread={unread}>{formattedSalary}</TableRowText>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText unread={unread}>{sent_by}</TableRowText>
        </TableRowGridItem>
      </TableRowGrid>
    </TableRowButton>
  );
};

const formatDate = (dateTime) => {
  let dateTimeCopy = new Date(dateTime.getTime()); //ensuring copy is a different object

  if (dateTime.getHours() > 12) {
    dateTimeCopy.setHours(dateTime.getHours() - 12);
  }
  //formatting time (09:00am)
  const timeOfDay =
    dateTime.getHours() < 12
      ? dateTimeCopy.toString().match(/(?:[01]\d|2[0123]):(?:[012345]\d)/)[0] +
        "am"
      : dateTimeCopy.toString().match(/(?:[01]\d|2[0123]):(?:[012345]\d)/)[0] +
        "pm";

  //formatting date (01/12/2021)
  let DD =
    dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
  let MM =
    dateTime.getMonth() + 1 < 10
      ? `0${dateTime.getMonth() + 1}`
      : dateTime.getMonth() + 1;
  let YYYY = dateTime.getFullYear();
  const formattedDate = `${DD}/${MM}/${YYYY}`;

  //confirming which time format to return
  const currentDate = new Date();
  const daysDifference = currentDate.getDate() - dateTime.getDate(); //days
  const timestamp =
    daysDifference < 1
      ? timeOfDay //9:00am
      : daysDifference < 2
      ? "yesterday"
      : formattedDate; //15/04/2021
  return timestamp;
};

const TableRowButton = styled((props) => <MinimalButton {...props} />)`
  display: flex;
  text-align: left;
  transition: all 0.2s ease 0s, z-index 0s;
  :hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 1px 5px 4px;
    z-index: 1;
    transform: translateX(-1px);
  }
`;
const TableRowGrid = styled((props) => <Grid {...props} />)`
  grid-template-columns: repeat(5, 1fr);
  background: ${({ background }) => background || colors.WHITE};
  padding: ${paddings.DEFAULT};
  grid-gap: ${paddings.DEFAULT};
  border-bottom: 1px solid ${colors.CATSKILL_WHITE};
`;
const TableRowGridItem = styled((props) => <Container {...props} />)`
  width: ${columnMaxWidth};
  margin: auto 0;
`;
const TableRowText = styled((props) => <Typography {...props} />)`
  color: ${({ color }) => color || colors.JUMBO};
  font-family: ${({ fontFamily, unread }) =>
    unread ? "Proxima-Nova-Bold" : fontFamily || "Proxima-Nova-Regular"};
  margin: auto 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const GreenCircle = ({ color = colors.JUNGLE_GREEN }) => (
  <Container margin="auto 0">
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill={color} />
    </svg>
  </Container>
);
