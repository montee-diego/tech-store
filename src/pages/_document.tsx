import Document, { Html, Head, Main, NextScript } from "next/document"

class PageDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Fulfull your tech needs at the best price!" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Tech Store" />
          <meta property="og:url" content="https://tech-store-six.vercel.app/" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://tech-store-six.vercel.app/og-image.jpg" />
          <meta property="og:description" content="Fulfull your tech needs at the best price!" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Iceland&family=Work+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PageDocument
