export default function Footer() {
  return (
    <footer className="py-12 border-t border-blue-400/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <p className="text-white font-semibold">Blue Flame AI</p>
          <p className="text-blue-300/70 text-sm mt-1">Smart power for private markets</p>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            ['Solutions', '#solutions'],
            ['How It Works', '#how'],
            ['Integrations', '#integrations'],
            ['Pricing', '#pricing'],
            ['About', '#about'],
            ['Resources', '#resources'],
            ['Security', '#security'],
            ['FAQ', '#faq']
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-blue-300/80 hover:text-cyan-300 transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="text-blue-300/70 text-sm">© {new Date().getFullYear()} Blue Flame AI</div>
      </div>
    </footer>
  )
}
