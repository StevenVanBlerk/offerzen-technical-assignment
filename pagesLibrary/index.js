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
        <TalentGrid items={interviewRequests} />
      <Container
        height="500px"
        width="500px"
        background="pink"
        margin="100px"
        boxShadow="rgb(0 0 0 / 10%) 1px 1px 5px"
      />
    </>
  );
};

export default Home;
