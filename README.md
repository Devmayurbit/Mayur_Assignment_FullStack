Sure — here is the README in **one single clean block** so you can copy-paste easily 👇

---

```md
# 🚀 RealTrust – FLiPR Fullstack Assignment

RealTrust is a full-stack web application built as my FLiPR assignment. It includes a modern landing page, projects gallery, happy clients testimonials, contact form and a full admin panel to manage all dynamic data.

---

## 🌍 Live Demo

🔗 **Frontend (Vercel)**  
https://flipr-fullstack-project.vercel.app/

🔗 **Backend API (Render)**  
https://mayurassignmentfullstackflipr.onrender.com

Example API endpoints:
- GET /api/projects
- GET /api/clients
- GET /api/contacts
- GET /api/subscribers

---

## ✨ Features

### Public Website
- Hero section with CTA buttons
- Our Projects (dynamic cards)
- Happy Clients (testimonials)
- Why Choose Us section
- Contact Form → stored in MongoDB
- Newsletter Subscription → prevents duplicate emails

### Admin Panel
Direct access links:
- /admin/projects
- /admin/clients
- /admin/contacts
- /admin/subscribers

Features:
- Add / delete projects
- Add / delete client testimonials
- View contacts submitted from website
- View newsletter subscribers

*(No authentication added intentionally for easy testing by FLiPR evaluators.)*

---

## 🧰 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- Mongoose
- CORS

**Database**
- MongoDB Atlas

---

## 🏗 Project Structure

```

Mayur_Assignment_FullStack/
├── Backend/           # Node + Express API
│   ├── server.js
│   ├── config/db.js
│   ├── models/
│   └── routes/
└── Frontend/
└── frontend/      # React + Vite + Tailwind
├── src/
├── vite.config.js
└── vercel.json

```

---

## ⚙️ Environment Variables

### Backend (.env or Render environment)
```

PORT=5000
MONGO_URI=your_mongo_atlas_connection_string
CLIENT_ORIGIN=[https://flipr-fullstack-project.vercel.app](https://flipr-fullstack-project.vercel.app)

```

---

## 🖥️ Run Locally

### Backend
```

cd Backend
npm install
npm run dev

```

### Frontend
```

cd Frontend/frontend
npm install
npm run dev

```

Update `src/api.js` for local dev:
```

baseURL: "[http://localhost:5000/api](http://localhost:5000/api)"

```

---

## 🌐 Deployment

### Backend (Render)
- Root directory: `Backend`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables added on Render:
  - `PORT=10000`
  - `MONGO_URI=<Atlas URL>`
  - `CLIENT_ORIGIN=https://flipr-fullstack-project.vercel.app`

### Frontend (Vercel)
- Root directory: `Frontend/frontend`
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

SPA routing fix → create `vercel.json` in frontend:
```

{
"rewrites": [
{ "source": "/(.*)", "destination": "/" }
]
}

```

---

## 🚀 Future Improvements
- Admin authentication (JWT)
- Update/edit data (not only delete/add)
- Image uploads via Cloudinary
- Email notification on new contact form
- Dark mode

---

## ✍️ Author
**Mayur Sonwane**  
Full-stack project created as **FLiPR Assignment** — UI + backend + MongoDB + deployment on Vercel & Render.

🔗 Live Demo: https://flipr-fullstack-project.vercel.app/
```

---

If you want, I can also generate:
✔ Submission PDF
✔ Flowchart / architecture diagram
✔ PPT for project viva

Just say **"make submission pdf"** or **"make ppt"** and I’ll do it. 🚀
