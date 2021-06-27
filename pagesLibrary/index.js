import React, { useState } from "react";
import styled from "styled-components";
import { Header, Container, Grid, Checkbox } from "components";
import { colors, paddings } from "config";
import { TalentGrid } from "./_TalentGrid";
import { SearchBar } from "./_SearchBar";
let interviewRequests = require("interviewRequests.json");

const Home = () => {
  // allTalent holds 'permanent' changes (archived) as the would be DB
  const [allTalent, setAllTalent] = useState(
    JSON.parse(JSON.stringify(interviewRequests)).map((entry, i) => ({
      ...entry,
      id: i,
    }))
  );
  const [talent, setTalent] = useState(allTalent);
  const [searchValue, setSearchValue] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [sortBy, setSortBy] = useState("unread");

  const handleFilter = (e) => {
    setSearchValue(e.target.value);
    const filteredTalent = allTalent.filter((entry) =>
      entry.candidate.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTalent(filteredTalent);
  };

  const handleSorting = (selectedColumn) => {
    setSortBy(selectedColumn);

    let talentCopy = [...talent];
    if (selectedColumn === "last_comms") {
      if (sortBy !== selectedColumn)
        talentCopy = talentCopy.sort((a, b) =>
          a.last_comms.date_time > b.last_comms.date_time ? -1 : 1
        );
      else {
        talentCopy = talentCopy.sort((a, b) =>
          a.last_comms.date_time > b.last_comms.date_time ? 1 : -1
        );
      }
    } else {
      if (sortBy !== selectedColumn)
        talentCopy = talentCopy.sort((a, b) =>
          a[selectedColumn] > b[selectedColumn] ? 1 : -1
        );
      else
        talentCopy = talentCopy.sort((a, b) =>
          a[selectedColumn] > b[selectedColumn] ? -1 : 1
        );
    }

    //if this sort button clicked for 3rd time in a row: reset sorting
    if (JSON.stringify(talentCopy) === JSON.stringify(talent)) {
      setSortBy("unread");
      talentCopy = talentCopy.sort((a, b) =>
        a.last_comms.unread > b.last_comms.unread ? -1 : 1
      );
    }
    setTalent(talentCopy);
  };
  const toggleArchived = (talentId) => {
    let allTalentCopy = [...allTalent];
    let talentCopy = [...talent];
    talentCopy = talentCopy.map((entry) => {
      return {
        ...entry,
        archived: entry.id === talentId ? !entry.archived : entry.archived,
      };
    });
    allTalentCopy = allTalentCopy.map((entry) => {
      return {
        ...entry,
        archived: entry.id === talentId ? !entry.archived : entry.archived,
      };
    });
    setTalent(talentCopy);
    setAllTalent(allTalentCopy);
  };
  return (
    <>
      <Header />
      <Container background={colors.WHITE}>
        <DualGrid>
          <Container padding={paddings.DEFAULT}>
            <SearchBar value={searchValue} onChange={handleFilter} />
          </Container>
          <Container margin="auto 0" padding={paddings.DEFAULT} textAlign="end">
            <Checkbox
              label="Show archived"
              checked={showArchived}
              onChange={() => {
                setShowArchived((prevState) => !prevState);
              }}
            />
          </Container>
        </DualGrid>
      </Container>
      <Container padding={`0 ${paddings.DEFAULT}`}>
        <TalentGrid
          items={talent}
          showArchived={showArchived}
          toggleArchived={toggleArchived}
          handleSorting={handleSorting}
          sortBy={sortBy}
        />
      </Container>
    </>
  );
};

export default Home;

const DualGrid = styled((props) => <Grid {...props} />)`
  grid-template-columns: 1fr;
  @media screen and (min-width: 350px) {
    grid-template-columns: 1fr 1fr;
  }
  justify-content: space-between;

  max-width: 1100px;
  width: 100%;
  margin: auto;
`;
