import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> This is a spotify clone </h1>
      <main>
        <Sidebar />
      </main>
      <div>{/*player*/}</div>
      
    </div>
  )
}
