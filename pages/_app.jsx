// Styles
import "../styles/globals.scss";
import "../styles/theme/main.scss";

// Icons
import "../assets/vendor/nucleo/css/nucleo.css";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
