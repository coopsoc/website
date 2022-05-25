import React, { useEffect } from "react";

// NextJS router
import { useRouter } from "next/router";

// Custom
import Header from "components/Header";
import Navigation from "components/Navigation";

// Styles
import "styles/globals.scss";
import "styles/theme/main.scss";

// Icons
import "assets/vendor/nucleo/css/nucleo.css";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "components/Footer";
import IndexHeader from "components/IndexHeader";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      {pathname === "/" ? <IndexHeader /> : <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
