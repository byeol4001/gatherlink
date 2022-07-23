import type { AppProps } from "next/app";
import { GlobalStyles, MainContent } from "../src/styles/style";

/* msw */
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainContent>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </MainContent>
  );
};

export default App;
