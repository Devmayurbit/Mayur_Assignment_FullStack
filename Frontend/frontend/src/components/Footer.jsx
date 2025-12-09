export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} RealTrust. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-slate-500">
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#projects" className="hover:text-slate-900">
            Projects
          </a>
          <a href="#clients" className="hover:text-slate-900">
            Clients
          </a>
        </div>
      </div>
    </footer>
  );
}
