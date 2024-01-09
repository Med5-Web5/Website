import { Control, Features, Hero, Newsletter, Services, Something, Utilizing } from '@/components/home'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Something />
      <Control />
      <Utilizing />
      <Features />
      <Newsletter />
    </main>
  )
}


