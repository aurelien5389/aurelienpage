import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PrestationsTeaser from '@/components/PrestationsTeaser'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PrestationsTeaser />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
