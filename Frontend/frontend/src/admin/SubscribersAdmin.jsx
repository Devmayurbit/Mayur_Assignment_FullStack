import { useEffect, useState } from "react";
import api from "../api";

export default function SubscribersAdmin() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/subscribers").then((res) => setSubs(res.data));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-slate-900">
        Newsletter Subscribers
      </h1>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="text-left px-3 py-2">Email</th>
              <th className="text-left px-3 py-2">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s) => (
              <tr key={s._id} className="border-b border-slate-100">
                <td className="px-3 py-2">{s.email}</td>
                <td className="px-3 py-2 text-slate-600">
                  {new Date(s.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
            {subs.length === 0 && (
              <tr>
                <td
                  colSpan="2"
                  className="px-3 py-4 text-center text-slate-500"
                >
                  No subscribers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
