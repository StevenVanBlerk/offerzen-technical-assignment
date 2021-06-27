import "/styles/globals.css";
import styled from "styled-components";
import { colors } from "config";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
