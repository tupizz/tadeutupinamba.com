import * as React from 'react';

import { ServerStyleSheet } from 'styled-components';

import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="pt-br">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Tadeu Tupinambá | Software Engineer"
          />
          <meta
            property="og:title"
            content="Tadeu Tupinambá | Software Engineer"
          />
          <meta
            property="og:description"
            content="Tadeu Tupinambá, 26 anos, engenherio de software, atua principalmente com as tecnologias: Javascript, React, Node.js, Flutter, Java"
          />
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="" />
          <meta
            name="twitter:title"
            content="Tadeu Tupinambá | Software Engineer"
          />
          <meta
            name="twitter:description"
            content="Tadeu Tupinambá, 26 anos, engenherio de software, atua principalmente com as tecnologias: Javascript, React, Node.js, Flutter, Java"
          />
          <meta property="twitter:image" content="" />

          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
