import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import ProjectsAdmin from "./admin/ProjectsAdmin.jsx";
import ClientsAdmin from "./admin/ClientsAdmin.jsx";
import ContactsAdmin from "./admin/ContactsAdmin.jsx";
import SubscribersAdmin from "./admin/SubscribersAdmin.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="clients" element={<ClientsAdmin />} />
          <Route path="contacts" element={<ContactsAdmin />} />
          <Route path="subscribers" element={<SubscribersAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
