export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 rounded-xl bg-orange-500 text-white font-bold items-center justify-center">
            R
          </span>
          <span className="text-lg font-semibold text-slate-900">
            RealTrust
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#projects" className="hover:text-slate-900">
            Our Projects
          </a>
          <a href="#clients" className="hover:text-slate-900">
            Happy Clients
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>

        <a
          href="/admin/projects"
          className="inline-flex items-center text-sm font-medium bg-orange-500 text-white px-3 py-1.5 rounded-full shadow hover:bg-orange-600"
        >
          Admin Panel
        </a>
      </div>
    </header>
  );
}
