import { useEffect, useState } from "react";
import api from "../api";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          Our Projects
        </h2>
        <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-10">
          A glimpse of the spaces and brands we&apos;ve shaped for our clients.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p._id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-600 flex-1">{p.description}</p>
                <button className="mt-3 inline-flex text-xs rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-100 self-start">
                  Read More
                </button>
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <p className="text-center text-sm text-slate-500 col-span-full">
              No projects added yet. Use the admin panel to add your first
              project.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
