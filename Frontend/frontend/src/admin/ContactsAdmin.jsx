import { useEffect, useState } from "react";
import api from "../api";

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-slate-900">
        Contact Form Responses
      </h1>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="text-left px-3 py-2">Full Name</th>
              <th className="text-left px-3 py-2">Email</th>
              <th className="text-left px-3 py-2">Mobile</th>
              <th className="text-left px-3 py-2">City</th>
              <th className="text-left px-3 py-2">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-b border-slate-100">
                <td className="px-3 py-2">{c.fullName}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2">{c.mobile}</td>
                <td className="px-3 py-2">{c.city}</td>
                <td className="px-3 py-2 text-slate-600">
                  {new Date(c.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-3 py-4 text-center text-slate-500"
                >
                  No contact submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
