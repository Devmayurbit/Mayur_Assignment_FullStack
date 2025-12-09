import { useEffect, useState } from "react";
import api from "../api";

export default function ClientsAdmin() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedpSb7fhGO0nYDv2UmAlwPryxgD8Eeej89Q&s",
    name: "Mayur Sonwane",
    designation: "Ceo",
    description: "I highly recommend this agency for their exceptional service and dedication to client satisfaction."
  });

  const fetchClients = () => {
    api.get("/clients").then((res) => setClients(res.data));
  };

  useEffect(fetchClients, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/clients", form);
    setForm({ imageUrl: "", name: "", designation: "", description: "" });
    fetchClients();
  };

  const handleDelete = async (id) => {
    await api.delete(`/clients/${id}`);
    fetchClients();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-slate-900">
        Client Management
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap gap-2 items-center text-xs"
      >
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          required
          className="flex-1 min-w-[160px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <input
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          required
          className="flex-1 min-w-[140px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <input
          name="designation"
          placeholder="Designation (CEO, Founder...)"
          value={form.designation}
          onChange={handleChange}
          required
          className="flex-1 min-w-[140px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <input
          name="description"
          placeholder="Short feedback"
          value={form.description}
          onChange={handleChange}
          required
          className="flex-[2] min-w-[200px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600"
        >
          Add
        </button>
      </form>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="text-left px-3 py-2">Image</th>
              <th className="text-left px-3 py-2">Name</th>
              <th className="text-left px-3 py-2">Designation</th>
              <th className="text-left px-3 py-2">Feedback</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c._id} className="border-b border-slate-100">
                <td className="px-3 py-2">
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    className="h-10 w-10 rounded-full object-cover border border-slate-200"
                  />
                </td>
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2">{c.designation}</td>
                <td className="px-3 py-2 text-slate-600">{c.description}</td>
                <td className="px-3 py-2 text-right">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="px-2.5 py-1 rounded-full border border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-3 py-4 text-center text-slate-500"
                >
                  No clients yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
