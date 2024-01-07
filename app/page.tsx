import { Control, Features, Hero, Newsletter, Services, Something, Utilizing } from '@/components/home';
import { Footer } from '@/components/layout';

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
      <Footer />
    </main>
  )
}
