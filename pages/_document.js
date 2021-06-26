import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

//this file along with .babelrc fix the nextJS / styled-components refresh issue: (Warning: Prop 'className' did not match. Server: "x" Client: "y")
//https://binyamin.medium.com/solving-the-styled-components-warning-in-next-js-with-babel-83080e45a0ff
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
