import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="NextJS app"/>
          <meta name="keywords" content="NextJS, TypeScript, Tailwind"/>
          <meta name="author" content="Rafa"/>
          <link rel="shortcut icon" href="../public/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
