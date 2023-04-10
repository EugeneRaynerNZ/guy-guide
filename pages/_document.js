import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script 
            async
            crossOrigin="anonymous"
            src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1684783406695529"}> 
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}