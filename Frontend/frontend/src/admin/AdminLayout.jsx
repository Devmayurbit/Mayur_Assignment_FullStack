import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-60 bg-slate-950 text-slate-100 flex flex-col px-4 py-5">
        <h2 className="text-sm font-semibold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2 text-xs">
          <AdminLink to="projects">Projects</AdminLink>
          <AdminLink to="clients">Clients</AdminLink>
          <AdminLink to="contacts">Contacts</AdminLink>
          <AdminLink to="subscribers">Subscribers</AdminLink>
        </nav>
        <div className="mt-auto pt-4">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-500 px-3 py-1.5 text-xs hover:bg-slate-800"
          >
            Back to Site
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}

function AdminLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-full ${
          isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800/40"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
