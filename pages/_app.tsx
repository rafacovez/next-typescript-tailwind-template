import Head from 'next/head'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Head>
        <title>Don Julio 1942® Tequila | Don Julio Tequila</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NextJS app" />
        <meta name="keywords" content="NextJS, TypeScript, Tailwind" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
