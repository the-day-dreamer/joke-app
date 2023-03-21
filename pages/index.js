import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Details from '@/components/Details'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main">
      <Navbar/>
      <Details/>
    </div>
  )
}
