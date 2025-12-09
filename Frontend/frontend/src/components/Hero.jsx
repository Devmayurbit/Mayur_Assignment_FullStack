export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-[1.6fr,1fr] gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">
            Consultation • Design • Marketing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Shape your space and brand with decisions backed by{" "}
            <span className="text-orange-400">real numbers</span>.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
            We help you analyze potential ROI, craft modern design, and run
            high-performing marketing campaigns — all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2.5 rounded-full bg-orange-500 text-sm font-medium shadow hover:bg-orange-400">
              Get Free Consultation
            </button>
            <button className="px-4 py-2.5 rounded-full border border-slate-600 text-sm font-medium hover:bg-slate-900/50">
              View Our Work
            </button>
          </div>
        </div>

        <div className="bg-slate-900/70 rounded-2xl border border-slate-700 shadow-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold">
            Quick Project Consultation
          </h2>
          <p className="text-sm text-slate-300">
            Share your requirements and get a tailored project roadmap with
            estimated timelines and budget.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="space-y-1">
              <p className="font-medium text-slate-100">Avg. ROI boost</p>
              <p>+28% in 6 months</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-slate-100">Projects delivered</p>
              <p>150+ across 12 cities</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-slate-100">Satisfaction</p>
              <p>4.9 / 5 client rating</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-slate-100">Support</p>
              <p>Dedicated project manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
