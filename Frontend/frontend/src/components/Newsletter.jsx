import { useState } from "react";
import api from "../api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      await api.post("/subscribers", { email });
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch {
      setStatus("Could not subscribe. Please try again.");
    }
  };

  return (
    <div className="bg-slate-950 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-1">
          Subscribe to our newsletter
        </h2>
        <p className="text-xs text-slate-300 mb-4">
          Insights on design, marketing and investment decisions — twice a
          month, no spam.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 text-sm"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-slate-600 bg-slate-900/50 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="rounded-full bg-orange-500 px-4 py-2 text-xs font-medium hover:bg-orange-400"
        >
          Subscribe
        </button>
      </form>
      {status && (
        <p className="mt-3 text-xs text-emerald-400 font-medium">{status}</p>
      )}
    </div>
  );
}
