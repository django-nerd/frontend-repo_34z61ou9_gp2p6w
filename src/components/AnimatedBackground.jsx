import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function random(min, max) {
  return Math.random() * (max - min) + min
}

export default function AnimatedBackground() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      x: [random(-50, 50), random(-100, 100)],
      y: [random(-50, 50), random(-100, 100)],
      opacity: [0.2, 0.6, 0.2],
      transition: { duration: random(8, 16), repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: i * 0.6 }
    }))
  }, [controls])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.18),transparent_40%)]" />

      {/* flowing flame lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flame" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#fb923c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-200} ${100 + i * 120} C 200 ${60 + i * 120}, 600 ${140 + i * 120}, 1200 ${80 + i * 120}`}
            stroke="url(#flame)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        ))}
      </svg>

      {/* glowing nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            top: `${random(5, 95)}%`,
            left: `${random(5, 95)}%`,
            background: 'radial-gradient(circle, rgba(56,189,248,0.9), rgba(14,165,233,0.1) 70%)',
            boxShadow: '0 0 20px rgba(56,189,248,0.5), 0 0 35px rgba(14,165,233,0.4)'
          }}
        />
      ))}

      {/* cyan-blue vignette */}
      <div className="absolute inset-0 mix-blend-screen pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
    </div>
  )
}
