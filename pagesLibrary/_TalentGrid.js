import styled from "styled-components";
import { colors, paddings, shadows } from "config";
import {
  HContainer,
  Container,
  Grid,
  MinimalButton,
  Typography,
} from "components";
import Image from "next/image";

const columnMaxWidth = "150px"; //this could be a prop if this component were needed to be more generic
/* This component is the bulk of the site. All state is managed in index.js and passed down to here. 
This file includes the interview requests count and Candidate table.

The general structure of this component is some basic outer divs with some basic styling like shadows and a series of grids,
each acting as a row of the table.

This component (and the whole page) are fully responsive for mobile
*/
export const TalentGrid = ({
  items,
  toggleArchived,
  showArchived,
  handleSorting,
  sortBy,
}) => {
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
            <TableHeader handleSorting={handleSorting} sortBy={sortBy} />
            {items.map((item, i) => (
              <TableRow
                key={i}
                item={item}
                toggleArchived={toggleArchived}
                showArchived={showArchived}
              />
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
};

/* Header bar of table. Contains column labels and sorting functionality. In hindsight, these headers could be mapped from an array of strings
to reduce the amount of code in this file. */
const TableHeader = ({ handleSorting, sortBy }) => {
  return (
    <>
      <TableRowGrid
        background={colors.ATHENS_GRAY}
        color={colors.OXFORD_BLUE}
        fontFamily="Proxima-Nova-Bold"
      >
        <TableRowGridItem>
          <MinimalButton
            onClick={() => {
              handleSorting("candidate");
            }}
          >
            <HContainer gridGap={paddings.SMALL}>
              <TableRowText
                color={colors.OXFORD_BLUE}
                fontFamily="Proxima-Nova-Bold"
              >
                Candidate
              </TableRowText>
              {sortBy !== "candidate" || (
                <Image
                  src="/icons/sort.svg"
                  alt="sort by"
                  width="10px"
                  height="10px"
                />
              )}
            </HContainer>
          </MinimalButton>
        </TableRowGridItem>
        <TableRowGridItem>
          <MinimalButton
            onClick={() => {
              handleSorting("role");
            }}
          >
            <HContainer gridGap={paddings.SMALL}>
              <TableRowText
                color={colors.OXFORD_BLUE}
                fontFamily="Proxima-Nova-Bold"
              >
                Role
              </TableRowText>

              {sortBy !== "role" || (
                <Image
                  src="/icons/sort.svg"
                  alt="sort by"
                  width="10px"
                  height="10px"
                />
              )}
            </HContainer>
          </MinimalButton>
        </TableRowGridItem>
        <TableRowGridItem>
          <MinimalButton
            onClick={() => {
              handleSorting("last_comms");
            }}
          >
            <HContainer gridGap={paddings.SMALL}>
              <TableRowText
                color={colors.OXFORD_BLUE}
                fontFamily="Proxima-Nova-Bold"
              >
                Last communication
              </TableRowText>

              {sortBy !== "last_comms" || (
                <Image
                  src="/icons/sort.svg"
                  alt="sort by"
                  width="10px"
                  height="10px"
                />
              )}
            </HContainer>
          </MinimalButton>
        </TableRowGridItem>
        <TableRowGridItem>
          <MinimalButton
            onClick={() => {
              handleSorting("salary");
            }}
          >
            <HContainer gridGap={paddings.SMALL}>
              <TableRowText
                color={colors.OXFORD_BLUE}
                fontFamily="Proxima-Nova-Bold"
              >
                Salary
              </TableRowText>

              {sortBy !== "salary" || (
                <Image
                  src="/icons/sort.svg"
                  alt="sort by"
                  width="10px"
                  height="10px"
                />
              )}
            </HContainer>
          </MinimalButton>
        </TableRowGridItem>
        <TableRowGridItem>
          <MinimalButton
            onClick={() => {
              handleSorting("sent_by");
            }}
          >
            <HContainer gridGap={paddings.SMALL}>
              <TableRowText
                color={colors.OXFORD_BLUE}
                fontFamily="Proxima-Nova-Bold"
              >
                Sent by
              </TableRowText>

              {sortBy !== "sent_by" || (
                <Image
                  src="/icons/sort.svg"
                  alt="sort by"
                  width="10px"
                  height="10px"
                />
              )}
            </HContainer>
          </MinimalButton>
        </TableRowGridItem>
        <TableRowGridItem>{/* archived */}</TableRowGridItem>
      </TableRowGrid>
    </>
  );
};

/* A row representing communication with a single candidate */
const TableRow = ({ item, toggleArchived, showArchived }) => {
  const { archived, candidate, id, image, last_comms, role, salary, sent_by } =
    item;
  const { unread, description: comms_desc, date_time } = last_comms;
  //salary formatting
  const formattedSalary = "R" + salary.toLocaleString("fr"); //"fr" can be removed to allow for salary formatting based on region.

  // date_time formatting
  const timestamp = formatDate(new Date(date_time));

  // handling whether or not archived rows are displayed
  return archived && showArchived === false ? (
    <></>
  ) : (
    // Row is encapsulated by a button (renders as an anchor tag) that would direct to the relevant candidate page
    <TableRowButton>
      <TableRowGrid
        width="100%"
        background={archived ? colors.ATHENS_GRAY : colors.WHITE}
      >
        <TableRowGridItem>
          <HContainer gridGap={paddings.DEFAULT}>
            {/* Icon isn't responsive. Assuming all possible images are from the same set of icons */}
            <Image src={image} alt={candidate} width="40px" height="40px" />
            <TableRowText unread={unread}>{candidate}</TableRowText>
          </HContainer>
        </TableRowGridItem>
        <TableRowGridItem>
          <TableRowText unread={unread}>{role || "-"}</TableRowText>
        </TableRowGridItem>
        {/* Last communication column is 1.6x the size of the other columns */}
        <TableRowGridItem width={`calc( ${columnMaxWidth} * 1.6)`}>
          <HContainer gridGap={paddings.SMALL}>
            {unread.toString()}
            <GreenCircle
              color={unread === false ? "transparent" : colors.JUNGLE_GREEN}
            />
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
        {/* this column is 0.4x the size of other columns */}
        <TableRowGridItem textAlign="right">
          <ArchiveButton
            onClick={() => {
              toggleArchived(id);
            }}
          >
            <TableRowText
              unread={unread}
              textAlign="right"
              color={colors.SCOOTER}
            >
              {archived ? "Unarchive" : "Archive"}
            </TableRowText>
          </ArchiveButton>
        </TableRowGridItem>
      </TableRowGrid>
    </TableRowButton>
  );
};

/* A function to format and neaten timestamps */
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

// A basic svg of a green/transparent circle (depending on if message is unread/read)
const GreenCircle = ({ color = colors.JUNGLE_GREEN }) => (
  <Container margin="auto 0">
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill={color} />
    </svg>
  </Container>
);

/* styled-components relevant to this file */

const TableRowButton = styled((props) => (
  <MinimalButton as="a" role="button" tabIndex={0} {...props} />
))`
  display: flex;
  text-align: left;
  transition: all 0.2s ease 0s, z-index 0s;
  :hover {
    box-shadow: ${shadows.ACTIVE};
    z-index: 1;
    transform: translateX(-1px);
  }
`;
const TableRowGrid = styled((props) => <Grid {...props} />)`
  grid-template-columns: 1fr 1fr 1.6fr 1fr 1fr 0.4fr;
  background: ${({ background }) => background || colors.WHITE};
  padding: ${paddings.DEFAULT};
  grid-gap: ${paddings.DEFAULT};
  border-bottom: 1px solid ${colors.CATSKILL_WHITE};
  transition: background-color 0.2s ease;
`;
const TableRowGridItem = styled((props) => <Container {...props} />)`
  width: ${({ width }) => width || columnMaxWidth};
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

const ArchiveButton = styled((props) => <MinimalButton {...props} />)`
  transition: all 0.2s ease;
  :hover {
    text-shadow: ${`0 0 1px ${colors.SCOOTER}`};
  }
`;
