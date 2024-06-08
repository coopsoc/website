import React, { createContext, useEffect } from "react";

// NextJS router
import { useRouter } from "next/router";

// Custom
import Header from "components/Header";
import Navigation from "components/Navigation";

// Styles
import "styles/globals.scss";
import "styles/theme/main.scss";

// Icons
import "public/vendor/nucleo/css/nucleo.css";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "components/Footer";
import IndexHeader from "components/IndexHeader";
import { AppProps } from "next/app";

config.autoAddCss = false;

const stripe = require("stripe")(process.env["STRIPE_TEST_KEY"]);
export const StripeContext = createContext(stripe);

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      {pathname === "/" ? <IndexHeader /> : <Header />}
      <StripeContext.Provider value={{ stripe }}>
        <main>
          <Component {...pageProps} />
        </main>
      </StripeContext.Provider>
      <Footer />
    </>
  );
}

export default App;
