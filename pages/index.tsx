import Head from 'next/head'
import Link from 'next/link'

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
      <h1>leading-relaxed</h1>
      <p>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <Link href="/">
        <a>Hello</a>
      </Link>
      <button>Click me</button>
    </div>
  )
}
