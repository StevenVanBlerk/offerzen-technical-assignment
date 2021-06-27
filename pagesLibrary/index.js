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
    </>
  );
};

export default Home;
