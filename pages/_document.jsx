import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
