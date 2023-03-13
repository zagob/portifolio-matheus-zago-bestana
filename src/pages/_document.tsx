import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="bg-zinc-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
