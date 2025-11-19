import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import ContactStrip from './components/ContactStrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-200 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Features />
        <Services />
        <Process />
        <CaseStudies />
        <WhyUs />
        <ContactStrip />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
