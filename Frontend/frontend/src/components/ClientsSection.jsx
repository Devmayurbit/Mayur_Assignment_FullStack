import { useEffect, useState } from "react";
import api from "../api";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api
      .get("/clients")
      .then((res) => setClients(res.data))
      .catch(console.error);
  }, []);

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          Happy Clients
        </h2>
        <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-10">
          Real words from the founders, directors and teams we&apos;ve worked
          with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((c) => (
            <article
              key={c._id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200"
                />
                <div className="text-xs">
                  <p className="font-semibold text-slate-900">{c.name}</p>
                  <p className="text-slate-500">{c.designation}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {c.description}
              </p>
            </article>
          ))}

          {clients.length === 0 && (
            <p className="text-center text-sm text-slate-500 col-span-full">
              No clients added yet. Use the admin panel to add testimonials.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
