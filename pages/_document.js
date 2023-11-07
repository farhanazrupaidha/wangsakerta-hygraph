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
            <meta name="google-site-verification" content="Q8sQqkInqGJz4af1-uM1t3BbBWqsVaZjHQNKOapd-18" />
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
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
                `,
                }}
            />
            {/* Global Site Tag (gtag.js) - Google Analytics */}            
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

