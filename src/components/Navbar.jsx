import { useState } from 'react'
import { Menu, Flame } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#how', label: 'How It Works' },
    { href: '#integrations', label: 'Integrations' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
    { href: '#resources', label: 'Resources' },
    { href: '#security', label: 'Security' },
    { href: '#faq', label: 'FAQ' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-blue-400/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <Flame className="w-5 h-5 text-cyan-400" />
          Blue Flame AI
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-shadow text-sm">Request Demo</a>
        </nav>
        <button className="md:hidden text-blue-100" onClick={() => setOpen(v => !v)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 grid gap-3 bg-slate-950/80">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-blue-200/90 py-2 border-b border-blue-400/10">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold text-center">Request Demo</a>
        </div>
      )}
    </header>
  )
}
