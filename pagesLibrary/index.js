import { Container, Typography, Header } from "components";
import { paddings } from "config";
import { colors } from "config";
import { TalentGrid } from "./_TalentGrid";
let interviewRequests = require("interviewRequests.json");
const Home = () => {
  console.log("interviewRequests", interviewRequests);
  return (
    <>
      <Header />
      <Container maxWidth="1140px" gridGap="3rem" margin="0 auto">
        <TalentGrid items={interviewRequests} />
      </Container>
    </>
  );
};

export default Home;
