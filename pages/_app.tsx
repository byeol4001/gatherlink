import type { AppProps } from "next/app";
import { MainContent } from "../src/styles/style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainContent>
      <div>
        <Component {...pageProps} />
      </div>
    </MainContent>
  );
};

export default App;
