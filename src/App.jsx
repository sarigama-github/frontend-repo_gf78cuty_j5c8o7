import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <WhyUs />
        <CTA />
        <footer className="py-10 bg-white border-t border-emerald-900/10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-emerald-900/70">
              © {new Date().getFullYear()} Graf Bernstoff Consulting • Diskrete Strategien für Immobilien & PV
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
