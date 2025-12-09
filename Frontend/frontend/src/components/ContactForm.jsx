import { useState } from "react";
import api from "../api";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      await api.post("/contacts", form);
      setStatus("Thanks! We’ll contact you soon.");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-1">
        Get a Free Consultation
      </h2>
      <p className="text-xs text-slate-500 mb-4">
        Share a few basic details and our team will get back to you with a
        project plan.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          name="city"
          placeholder="Area, City"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-orange-500 text-white text-sm font-medium py-2 hover:bg-orange-600"
        >
          Get Quick Quote
        </button>
      </form>
      {status && (
        <p className="mt-3 text-xs text-emerald-600 font-medium">{status}</p>
      )}
    </div>
  );
}
