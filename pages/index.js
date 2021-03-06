import Head from 'next/head'
import Boxes from '../components/Boxes'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap');
        </style>
      </Head>
      <NavBar />
      <Boxes />
      <Footer />
    </div>
  )
}
