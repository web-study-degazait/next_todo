import "../styles/Global.css";
import type { AppProps } from "next/app";
import Providers from "../components/Common/Providers";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers pageProps={pageProps}>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default App;
