import "@assets/main.css";
import "@assets/chrome-bug.css";
import { useEffect } from "react";
import Layout from "@components/common/Layout";
import { Provider as RWBProvider } from "react-wrap-balancer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
        <Layout pageProps={pageProps}>
          <RWBProvider>
            <Component {...pageProps} />
          </RWBProvider>
        </Layout>
    </>
  );
}
