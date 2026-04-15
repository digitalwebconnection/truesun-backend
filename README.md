# TrueSun Solar — Full-Stack Web Application

> **Solar energy project portfolio + blog**, powered by React (Vite) on the frontend and Express + MongoDB Atlas + Cloudinary on the backend.

---

## 📐 Project Structure

```
truesun-backend/
├── backend/                  # Express REST API
│   ├── server.js             # Entry point
│   ├── .env                  # 🔒 Secret config (not committed)
│   ├── package.json
│   └── src/
│       ├── config/
│       │   ├── db.js         # MongoDB Atlas connection
│       │   └── cloudinary.js # Cloudinary SDK config + ping
│       ├── controllers/
│       │   └── controllers.js # CRUD logic for projects & blogs
│       ├── middleware/
│       │   └── upload.js     # multer → Cloudinary (no local disk)
│       ├── models/
│       │   ├── Project.js
│       │   └── Blog.js
│       └── routes/
│           ├── projects.js
│           └── blogs.js
│
└── frontend/                 # React + Vite + Tailwind
    ├── src/
    ├── vercel.json           # SPA rewrites for Vercel
    └── package.json
```

---

## 🖼️ Image Flow

```
Admin Panel → FormData (multipart) → Express route
                                         ↓
                              multer-storage-cloudinary
                                         ↓
                              Cloudinary CDN (stored)
                                         ↓
                    Cloudinary secure_url saved to MongoDB
                                         ↓
                    Frontend reads URL from API → renders image
```

**Images are never stored on the server disk.** The `backend/uploads/` folder is not used.

---

## ⚙️ Environment Variables

### `backend/.env`

```env
# MongoDB Atlas
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/truesun?retryWrites=true&w=majority

# Server
PORT=5000

# CORS — your deployed frontend URL(s)
FRONTEND_URL=https://your-frontend.vercel.app
FRONTEND_URL_2=http://localhost:5173   # optional second origin

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### `frontend/.env` (or `frontend/.env.production`)

```env
VITE_API_URL=https://your-backend.vercel.app
```

---

## 🚀 Local Development

### 1. Backend

```bash
cd backend
npm install
npm run dev        # nodemon server.js → http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev        # vite → http://localhost:5173
```

The Vite proxy forwards `/api/*` to `http://localhost:5000` automatically.

---

## 🌐 Deployment

### Backend → Vercel (Serverless)

1. Push the repo to GitHub.
2. Create a **new Vercel project** pointing to the `backend/` folder.
3. Set **Root Directory** to `backend` in Vercel settings.
4. Add all environment variables from `backend/.env` in the Vercel dashboard.
5. Vercel will auto-detect `server.js` and export it as a serverless function.

### Frontend → Vercel

1. Create a **second Vercel project** pointing to the `frontend/` folder.
2. Add `VITE_API_URL=https://<your-backend-vercel-app>.vercel.app` as an env var.
3. The `vercel.json` in `frontend/` already handles SPA rewrites.

---

## 📡 API Reference

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/health`         | Health check             |
| GET    | `/api/projects`       | List all projects        |
| GET    | `/api/projects/:id`   | Get single project       |
| POST   | `/api/projects`       | Create project (+ image) |
| PUT    | `/api/projects/:id`   | Update project (+ image) |
| DELETE | `/api/projects/:id`   | Delete project           |
| GET    | `/api/blogs`          | List all blogs           |
| GET    | `/api/blogs/:id`      | Get single blog          |
| POST   | `/api/blogs`          | Create blog (+ image)    |
| PUT    | `/api/blogs/:id`      | Update blog (+ image)    |
| DELETE | `/api/blogs/:id`      | Delete blog              |

All `POST` / `PUT` endpoints accept `multipart/form-data` with an optional `image` file field.

---

## 🛠️ Tech Stack

| Layer     | Technology                                |
|-----------|-------------------------------------------|
| Frontend  | React 19, TypeScript, Vite, Tailwind v4  |
| Backend   | Node.js, Express 4, CommonJS             |
| Database  | MongoDB Atlas (Mongoose 8)               |
| Storage   | Cloudinary (images via CDN)              |
| Deploy    | Vercel (both frontend & backend)         |