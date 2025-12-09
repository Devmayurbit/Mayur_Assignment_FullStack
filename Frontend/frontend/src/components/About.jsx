export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          Why Choose RealTrust
        </h2>
        <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-10">
          We bring together financial analysis, design excellence, and
          marketing strategy so you don&apos;t have to manage multiple
          agencies.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Potential ROI"
            body="We validate every decision with numbers — expected returns, payback period, and risk analysis for your project."
          />
          <Card
            title="Design"
            body="Our designers craft modern, functional spaces and digital assets that match your brand and delight your users."
          />
          <Card
            title="Marketing"
            body="We design full-funnel campaigns focused on conversions, not just clicks — so marketing actually moves the needle."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, body }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
