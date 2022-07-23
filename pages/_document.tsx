import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>gatherLink</title>
        </Head>
        <NextSeo
          openGraph={{
            // url: `${process.env.CERTIFICATE_S3_ORIGIN}/`,
            images: [
              {
                url: `/public/images/og-gatherlink.png`,
                width: 600,
                height: 288,
                type: "image/png",
              },
            ],
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
