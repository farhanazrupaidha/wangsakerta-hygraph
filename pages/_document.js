import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon/logo-wangsakerta.png" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
            />
            <meta name="google-site-verification" content="0yodTROwuSO4D4xYd5WBRBnm7iehZRuZx_7shUU-OK8" />
            <link
              rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

