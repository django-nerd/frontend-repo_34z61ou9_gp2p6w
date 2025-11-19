import { motion } from 'framer-motion'
import { Brain, LineChart, Workflow, ShieldCheck } from 'lucide-react'

const items = [
  {
    title: 'Deeper Investment Insights',
    description: 'Surface precise signals across transcripts, filings, CRM and market data to sharpen theses.',
    icon: Brain
  },
  {
    title: 'Scalable Execution',
    description: 'Automate diligence, outreach and monitoring with orchestrated AI workflows.',
    icon: Workflow
  },
  {
    title: 'Intelligent Decision Making',
    description: 'Agentic reasoning that explains the why—not a black box.',
    icon: LineChart
  },
  {
    title: 'Trusted & Secure',
    description: 'Enterprise‑grade controls, encryption and tenant isolation by default.',
    icon: ShieldCheck
  }
]

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/40 p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_top,rgba(34,197,238,0.08),transparent_60%)]" />
              <item.icon className="w-6 h-6 text-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
