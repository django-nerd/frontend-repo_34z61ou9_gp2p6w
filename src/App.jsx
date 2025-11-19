import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import LogoWall from './components/LogoWall'
import Footer from './components/Footer'

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handleSecondary = () => {
    const el = document.getElementById('how')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen text-blue-100">
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero onPrimaryClick={handlePrimary} onSecondaryClick={handleSecondary} />
        <ValueProps />
        <LogoWall />

        {/* Placeholder sections for structure */}
        <section id="how" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Data integration, agentic intelligence, workflow automation, and actionable insights—stitched end‑to‑end with security as a core principle.</p>
          </div>
        </section>

        <section id="integrations" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">Integrations</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Connect DealCloud, Salesforce, Grata, Microsoft 365 and more. Data normalizes into your private intelligence core.</p>
          </div>
        </section>

        <section id="pricing" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">Pricing</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Flexible plans for emerging managers through global institutions. Every tier includes enterprise security.</p>
          </div>
        </section>

        <section id="about" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">About / Team</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Built by operators from AI and finance. We combine deep technical rigor with domain expertise.</p>
          </div>
        </section>

        <section id="resources" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">Resources / Insights</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Thought leadership, case studies, and webinars on AI in private markets.</p>
          </div>
        </section>

        <section id="security" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">Security / Trust</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Encryption at rest and in transit, tenant isolation, role‑based access, and auditable workflows.</p>
          </div>
        </section>

        <section id="faq" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">FAQ</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl">Answers to common questions about what Blue Flame AI is, how it differs from generic chatbots, integration, and security.</p>
          </div>
        </section>

        <section id="contact" className="py-24 border-t border-blue-400/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">Request a Demo</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4 max-w-xl">
              <input className="bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:border-cyan-400/60" placeholder="Name" />
              <input type="email" className="bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:border-cyan-400/60" placeholder="Email" />
              <input className="bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:border-cyan-400/60" placeholder="Company" />
              <select className="bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 focus:outline-none focus:border-cyan-400/60">
                <option className="bg-slate-900">Team</option>
                <option className="bg-slate-900">Private Equity</option>
                <option className="bg-slate-900">Investment Banking</option>
                <option className="bg-slate-900">Real Estate</option>
                <option className="bg-slate-900">Hedge Funds</option>
              </select>
              <textarea rows="4" className="bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:border-cyan-400/60" placeholder="Message" />
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.35)] transition-all">Request Demo</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
