# 💼 Job Manager — Full-Stack Job Application Tracker

<div align="center">

![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**A production-style full-stack MERN application for tracking job applications — with secure JWT authentication, full CRUD, protected routes, and a clean responsive UI.**

[🌐 Live Demo](#) &nbsp;·&nbsp; [📖 API Docs](#-api-reference) &nbsp;·&nbsp; [🚀 Quick Start](#-getting-started) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/harshit8204/job-manager/issues)

</div>

---

## 📸 Preview

> 💡 Add screenshots of your app here:
>
> <!-- ![Dashboard](./screenshots/dashboard.png) -->
> <!-- ![Login Page](./screenshots/login.png) -->

---

## 📌 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Authentication Flow](#-authentication-flow)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 💡 About

**Job Manager** is a full-stack web application that lets users track their entire job search in one place. Users can register, log in securely, and manage all their job applications — recording the company, position, and real-time status of each application.

Built as a **production-style MERN stack** project, it demonstrates end-to-end full-stack development skills including:

- 🔐 **JWT-based authentication** with secure password hashing via bcryptjs
- 🏗️ **RESTful API design** following standard `/api/v1/` versioning conventions
- 🛡️ **Protected routes** — both on the frontend (React Router) and backend (middleware)
- 🗄️ **MongoDB + Mongoose** with relational data models (User ↔ Jobs)
- ⚡ **Async error handling** — clean, centralised error management across all routes
- 📱 **Responsive UI** — built with React, Bootstrap, and Axios for API communication

> This project mirrors the architecture used in real-world enterprise applications.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ **React 18** | Component-based UI |
| ⚡ **Vite** | Build tool & dev server |
| 🧭 **React Router** | Client-side routing & protected pages |
| 🎨 **Bootstrap 5** | Responsive styling & UI components |
| 📡 **Axios** | HTTP client for API requests |

### Backend
| Technology | Purpose |
|------------|---------|
| 🟢 **Node.js 18+** | JavaScript runtime |
| 🚂 **Express** | REST API framework |
| 🍃 **MongoDB** | NoSQL database |
| 🦎 **Mongoose** | ODM for data modelling & validation |
| 🔑 **JWT** | Stateless authentication tokens |
| 🔒 **bcryptjs** | Password hashing |
| 🛡️ **express-async-errors** | Centralised async error handling |
| 🌐 **CORS** | Cross-origin request management |
| 📦 **dotenv** | Environment variable management |

---

## ✨ Features

- 🔐 **Secure Registration & Login** — JWT tokens + bcrypt password hashing
- 📋 **Full CRUD for Job Applications** — Create, Read, Update, Delete
- 🏷️ **Status Tracking** — Mark jobs as `pending` / `interview` / `declined`
- 🛡️ **Protected Routes** — Authenticated access on both frontend and backend
- 📡 **RESTful API** — Versioned endpoints following REST conventions
- 🔄 **Token-based Sessions** — Stateless auth — no server-side sessions needed
- ❌ **Centralised Error Handling** — Clean error responses across all routes
- 📱 **Responsive UI** — Works on all screen sizes via Bootstrap grid
- 🗂️ **Per-user Data Isolation** — Users only see their own job applications

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT (Browser)                   │
│                                                      │
│  React + Vite                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │
│  │  Login   │  │ Sign Up  │  │    Dashboard     │   │
│  │   Page   │  │   Page   │  │  (Job List/Form) │   │
│  └────┬─────┘  └────┬─────┘  └────────┬─────────┘   │
│       │              │                 │              │
│       └──────────────┴─────────────────┘             │
│                    Axios (HTTP)                       │
└──────────────────────┬──────────────────────────────┘
                       │  REST API calls
                       ▼
┌─────────────────────────────────────────────────────┐
│              SERVER  (Node.js + Express)             │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │  Routes: /api/v1/auth  &  /api/v1/jobs      │    │
│  └──────────────────┬──────────────────────────┘    │
│                     │                               │
│          ┌──────────┴──────────┐                    │
│          ▼                     ▼                    │
│   ┌─────────────┐     ┌────────────────┐            │
│   │  Auth       │     │  Job           │            │
│   │  Controller │     │  Controller    │            │
│   │  (register/ │     │  (CRUD ops)    │            │
│   │   login)    │     │                │            │
│   └──────┬──────┘     └───────┬────────┘            │
│          │                    │                     │
│   ┌──────┴──────────────────┬─┘                     │
│   │   JWT Middleware        │                       │
│   │   (verifies token)      │                       │
│   └─────────────────────────┘                       │
└──────────────────────┬──────────────────────────────┘
                       │  Mongoose ODM
                       ▼
┌─────────────────────────────────────────────────────┐
│                  MongoDB Database                    │
│                                                      │
│   ┌────────────────┐     ┌────────────────────┐     │
│   │  Users         │     │  Jobs              │     │
│   │  ─────────     │     │  ──────────────    │     │
│   │  _id           │◄────│  createdBy (ref)   │     │
│   │  name          │     │  company           │     │
│   │  email         │     │  position          │     │
│   │  password      │     │  status            │     │
│   └────────────────┘     └────────────────────┘     │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
job-manager/
│
├── frontend/                   # ⚛️  React App (Vite)
│   ├── src/
│   │   ├── pages/              # Route-level page components
│   │   │   ├── Login.jsx       # Login page
│   │   │   ├── Signup.jsx      # Registration page
│   │   │   └── Dashboard.jsx   # Main job management UI
│   │   ├── components/         # Reusable UI components
│   │   └── router.jsx          # React Router config & protected routes
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/                    # 🟢  Node.js / Express API
    ├── controllers/
    │   ├── authController.js   # Register & login logic
    │   └── jobController.js    # Job CRUD logic
    ├── models/
    │   ├── User.js             # Mongoose User schema
    │   └── Job.js              # Mongoose Job schema
    ├── routes/
    │   ├── authRoutes.js       # /api/v1/auth endpoints
    │   └── jobRoutes.js        # /api/v1/jobs endpoints
    ├── middlewares/
    │   ├── authMiddleware.js   # JWT verification
    │   └── errorHandler.js     # Centralised error handling
    ├── db/
    │   └── connect.js          # MongoDB connection
    ├── app.js                  # Express app setup
    └── package.json
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have:
- [Node.js](https://nodejs.org/) **v18 or higher**
- **npm** (bundled with Node.js)
- A **MongoDB** instance — [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud) or local install

```bash
node -v    # v18+
npm -v
```

### 📥 Installation

**1. Clone the repository**
```bash
git clone https://github.com/harshit8204/job-manager.git
cd job-manager
```

**2. Set up the Backend**
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3000
```

Start the backend server:
```bash
npm run dev
```
> ✅ Backend running at `http://localhost:3000`

**3. Set up the Frontend** *(open a new terminal)*
```bash
cd frontend
npm install
npm run dev
```
> ✅ Frontend running at `http://localhost:5173`

**4. Open the app**
```
http://localhost:5173
```

---

## 🔑 Environment Variables

All environment variables go in `backend/.env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/jobmanager` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `mysupersecretkey123` |
| `PORT` | Port for the Express server | `3000` |

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

---

## 📖 API Reference

Base URL: `http://localhost:3000/api/v1`

### 🔐 Auth Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login & receive JWT token | ❌ |

**Register — Request Body:**
```json
{
  "name": "Harshit",
  "email": "harshit@example.com",
  "password": "securepassword123"
}
```

**Login — Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "name": "Harshit", "email": "harshit@example.com" }
}
```

---

### 💼 Job Endpoints

> All job endpoints require `Authorization: Bearer <token>` header

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/jobs` | Get all jobs for logged-in user |
| `POST` | `/jobs` | Create a new job application |
| `GET` | `/jobs/:id` | Get a specific job by ID |
| `PATCH` | `/jobs/:id` | Update a job application |
| `DELETE` | `/jobs/:id` | Delete a job application |

**Create Job — Request Body:**
```json
{
  "company": "Google",
  "position": "Software Engineer",
  "status": "pending"
}
```

**Job Status Values:** `pending` &nbsp;|&nbsp; `interview` &nbsp;|&nbsp; `declined`

---

## 🔐 Authentication Flow

```
User Registers / Logs In
         │
         ▼
Backend verifies credentials
         │
         ▼
JWT token generated & returned to client
         │
         ▼
Frontend stores token (localStorage)
         │
         ▼
Every API request includes:
  Authorization: Bearer <token>
         │
         ▼
JWT Middleware verifies token on every protected route
         │
    ┌────┴──────────────────┐
    ▼                       ▼
  Valid ✅              Invalid ❌
  → Access granted     → 401 Unauthorized
```

---

## 🗺️ Roadmap

- [x] User registration & login with JWT
- [x] Full CRUD for job applications
- [x] Status tracking (pending / interview / declined)
- [x] Protected routes (frontend + backend)
- [x] Centralised async error handling
- [x] Responsive UI with Bootstrap
- [ ] 🔜 Filter & search jobs by status or company
- [ ] 🔜 Dashboard analytics (charts by status)
- [ ] 🔜 Pagination for large job lists
- [ ] 🔜 Deploy frontend (Vercel) + backend (Render)
- [ ] 🔜 Add notes/comments field per job
- [ ] 🔜 Interview date reminders

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/add-job-filter`
3. Commit: `git commit -m "feat: add filter by job status"`
4. Push: `git push origin feature/add-job-filter`
5. Open a Pull Request

---

## 👤 Author

**Harshit**

[![GitHub](https://img.shields.io/badge/GitHub-harshit8204-181717?style=flat-square&logo=github)](https://github.com/harshit8204)

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

*Built to solve a real problem — tracking the job hunt, one application at a time.* 💼

⭐ **If this project impressed you, please give it a star!**

</div>
