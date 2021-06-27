import "/styles/globals.css";
import styled from "styled-components";
import { colors } from "config";

const Main = styled.main`
  /* text-align: center; */
  /* background-color: ${colors.CHARCOAL}; */
  /* color: white; */
  /* padding: 0px 0 200px 0; */
`;

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
