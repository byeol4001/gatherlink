import type { AppProps } from "next/app";
import { GlobalStyles, MainContent } from "../src/styles/style";

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
