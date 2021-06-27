import styled from "styled-components";
import { colors, paddings, SHADOW } from "config";
import {
  VContainer,
  HContainer,
  Container,
  Grid,
  MinimalButton,
  Typography,
} from "components";

import Image from "next/image";
export const TalentGrid = ({ items }) => {
  const interviewCount = items.length;
  return (
    <>
      <Container maxWidth="1140px" width="100%" margin="0 auto">
        <Typography
          color={colors.JUMBO}
          fontWeight="bold"
          textAlign="right"
          padding={`${paddings.DEFAULT} 0`}
        >
          {interviewCount} interview request
          {interviewCount !== 1 ? "s" : undefined}
        </Typography>
        {/* <TableGrid> */}
        <Container boxShadow={SHADOW}>
          <TableHeader />
          {items.map((item, key) => (
            <TableRow key={key} item={item} />
          ))}
        </Container>
        {/* </TableGrid> */}
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
        <TableRowText fontFamily="Proxima-Nova-Bold">Candidate</TableRowText>
        <TableRowText color={colors.OXFORD_BLUE} fontFamily="Proxima-Nova-Bold">
          Role
        </TableRowText>
        <TableRowText color={colors.OXFORD_BLUE} fontFamily="Proxima-Nova-Bold">
          Last communication
        </TableRowText>
        <TableRowText color={colors.OXFORD_BLUE} fontFamily="Proxima-Nova-Bold">
          Salary
        </TableRowText>
        <TableRowText color={colors.OXFORD_BLUE} fontFamily="Proxima-Nova-Bold">
          Sent by
        </TableRowText>
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
  // const timestamp = formatDate(new Date("2021-10-10 12:09:51"));
  const timestamp = formatDate(new Date(date_time));
  return (
    <TableRowButton width="100%">
      <TableRowGrid width="100%">
        <HContainer background={colors.WHITE} gridGap={paddings.DEFAULT}>
          <Image
            src={image}
            alt={candidate}
            width="35px"
            height="35px"
            layout="fixed" //to-do: look into what layout/dimensions to use
          />
          <TableRowText>{candidate}</TableRowText>
        </HContainer>
        <TableRowText>{role}</TableRowText>
        <HContainer gridGap={paddings.SMALL}>
          <GreenCircle />
          <TableRowText>{comms_desc}</TableRowText>
          <TableRowText fontSize="12px" color={colors.GRAY_CHATEAU}>
            {timestamp}
          </TableRowText>
        </HContainer>
        <TableRowText>{formattedSalary}</TableRowText>
        <TableRowText>{sent_by}</TableRowText>
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
`;
const TableRowGrid = styled((props) => <Grid {...props} />)`
  grid-template-columns: repeat(5, 1fr);
  background: ${({ background }) => background || colors.WHITE};
  padding: ${paddings.DEFAULT};
`;

const TableRowText = styled((props) => <Typography {...props} />)`
  color: ${({ color }) => color || colors.OXFORD_BLUE};
  font-family: ${({ fontFamily }) => fontFamily || "Proxima-Nova-Regular"};
  margin: auto 0;
`;

const GreenCircle = ({ color = colors.JUNGLE_GREEN }) => (
  <Container margin="auto 0">
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill={color} />
    </svg>
  </Container>
);
