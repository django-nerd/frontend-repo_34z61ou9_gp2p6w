import { motion } from 'framer-motion'

const logos = ['Aurora', 'NorthPeak', 'SummitCap', 'VectorBank', 'HarborStone', 'CrestPoint']

export default function LogoWall() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-blue-300/70 text-sm mb-6">Trusted by leading firms</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="h-10 rounded-xl border border-blue-400/20 bg-slate-900/40 flex items-center justify-center text-blue-200"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
