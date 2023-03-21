import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>CatMaster - Blog</title>
        <link rel="icon" type="image/x-icon" href="/icon.svg"></link>
      </Head>

      <body>
        <Main /> 
        <NextScript />
      </body>
    </Html>
  )
}
