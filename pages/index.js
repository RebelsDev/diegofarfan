import Head from 'next/head'
import NavBar from './shared/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego Farfán</title>
      </Head>
      <nav>
        <NavBar />
      </nav>

    </div>
  )
}
