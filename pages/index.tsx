import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS, TypeScript and Tailwind CSS template</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NextJS app" />
        <meta name="keywords" content="NextJS, TypeScript, Tailwind" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <p>Hello world</p>
    </div>
  )
}
