import { motion } from 'framer-motion'
import { Flame, Sparkles } from 'lucide-react'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Agentic AI for Private Markets</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: 'Manrope, var(--font-sans)' }}
        >
          Blue Flame AI: Intelligence for Private Markets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-blue-200 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Agentic AI built for Private Equity, Investment Banking & Real Estate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryClick}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_0_0_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.35)] transition-all"
          >
            Request Demo
            <Flame className="w-5 h-5 transition-transform group-hover:scale-110" />
          </button>
          <button
            onClick={onSecondaryClick}
            className="px-6 py-3 rounded-xl border border-blue-400/40 text-blue-100 hover:bg-blue-400/10 transition-colors"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,248,0.08),transparent_60%)]" />
      </div>
    </section>
  )
}
