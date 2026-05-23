# 📋 Complete Project Structure - Manoj Katuwal's Portfolio

## Full Directory Tree

```
Portfolio/
│
├── 📄 README.md                          (Main project readme)
│
├── 🔧 backend/
│   ├── 📄 server.js                      (Main server file)
│   ├── 📄 app.js                         (Express app setup)
│   ├── 📄 package.json                   (Dependencies)
│   ├── 📄 .env                           (Environment variables - CREATE THIS)
│   ├── 📄 .env.example                   (Example env file)
│   ├── 📄 BACKEND_SETUP.md               (Backend documentation)
│   │
│   ├── 📁 config/
│   │   └── 📄 db.js                      (MySQL connection pool)
│   │
│   ├── 📁 controllers/
│   │   └── 📄 projectController.js       (Business logic for projects)
│   │
│   ├── 📁 models/
│   │   └── 📄 Project.js                 (Database model)
│   │
│   ├── 📁 routes/
│   │   └── 📄 projectRoutes.js           (API routes)
│   │
│   ├── 📁 middleware/
│   │   └── 📄 errorHandler.js            (Global error handling)
│   │
│   ├── 📁 database/
│   │   └── 📄 schema.sql                 (MySQL schema - RUN THIS)
│   │
│   └── 📁 node_modules/                  (Dependencies - auto generated)
│
├── 🎨 frontend/
│   └── vite-project/
│       ├── 📄 package.json               (Dependencies)
│       ├── 📄 vite.config.js             (Vite configuration)
│       ├── 📄 eslint.config.js           (ESLint rules)
│       ├── 📄 index.html                 (HTML entry point)
│       ├── 📄 README.md                  (Default Vite README)
│       ├── 📄 FRONTEND_README.md         (Frontend documentation)
│       ├── 📄 STRUCTURE.md               (Frontend structure)
│       │
│       ├── 📁 src/
│       │   ├── 📄 main.jsx               (React entry point)
│       │   ├── 📄 App.jsx                (Main App component)
│       │   ├── 📄 App.css                (Global App styles)
│       │   ├── 📄 index.css              (Global CSS)
│       │   │
│       │   ├── 📁 components/            (Reusable components)
│       │   │   ├── 📄 Navbar.jsx
│       │   │   ├── 📄 Navbar.css
│       │   │   ├── 📄 Hero.jsx
│       │   │   ├── 📄 Hero.css
│       │   │   ├── 📄 Projects.jsx
│       │   │   ├── 📄 Projects.css
│       │   │   ├── 📄 Skills.jsx
│       │   │   ├── 📄 Skills.css
│       │   │   ├── 📄 About.jsx
│       │   │   ├── 📄 About.css
│       │   │   ├── 📄 Contact.jsx
│       │   │   ├── 📄 Contact.css
│       │   │   ├── 📄 Footer.jsx
│       │   │   └── 📄 Footer.css
│       │   │
│       │   ├── 📁 hooks/                 (Custom React hooks)
│       │   │   └── 📄 useApi.js
│       │   │
│       │   ├── 📁 services/              (API services)
│       │   │   └── 📄 api.js
│       │   │
│       │   ├── 📁 pages/                 (Page components - future use)
│       │   ├── 📁 layouts/               (Layout components - future use)
│       │   ├── 📁 assets/                (Images, fonts, static files)
│       │   │
│       │   └── 📁 node_modules/          (Dependencies - auto generated)
│       │
│       └── 📁 public/                    (Static assets)
│
└── 📄 Project Structure.md               (This file)
```

## ✅ Setup Checklist

### Backend Setup
- [ ] Navigate to `backend/` folder
- [ ] Create `.env` file (copy from `.env.example`)
  ```
  PORT=5000
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_password
  DB_NAME=portfolio_db
  NODE_ENV=development
  ```
- [ ] Run `npm install`
- [ ] Create MySQL database by running `database/schema.sql`
- [ ] Start backend: `npm run dev`
- [ ] ✅ Backend should be running on http://localhost:5000

### Frontend Setup
- [ ] Navigate to `frontend/vite-project/` folder
- [ ] Run `npm install`
- [ ] Start frontend: `npm run dev`
- [ ] ✅ Frontend should be running on http://localhost:5173

## 📊 Component Hierarchy

```
App
├── Navbar
├── Hero
│   ├── Floating Cards
│   └── Scroll Indicator
├── Projects
│   └── Project Cards (from API)
├── Skills
│   └── Skill Categories
├── About
│   ├── About Text
│   └── Code Editor Display
├── Contact
│   ├── Contact Info
│   └── Contact Form
└── Footer
    ├── Footer Sections
    └── Social Links
```

## 🔄 Data Flow

```
Frontend (React)
    ↓
services/api.js (Fetch)
    ↓
Backend API (http://localhost:5000)
    ↓
routes/projectRoutes.js
    ↓
controllers/projectController.js
    ↓
models/Project.js
    ↓
Database (MySQL)
```

## 🎯 Key Files & Their Purpose

### Backend
| File | Purpose |
|------|---------|
| `server.js` | Main server entry point |
| `config/db.js` | MySQL connection setup |
| `models/Project.js` | Data model & queries |
| `controllers/projectController.js` | Business logic |
| `routes/projectRoutes.js` | API endpoints |
| `middleware/errorHandler.js` | Error handling |
| `database/schema.sql` | Database structure |

### Frontend
| File | Purpose |
|------|---------|
| `main.jsx` | React entry point |
| `App.jsx` | Main component |
| `App.css` | Global animations |
| `components/*.jsx` | Page sections |
| `services/api.js` | API calls |
| `hooks/useApi.js` | Custom hooks |
| `index.css` | Global styles |

## 🚀 Quick Start Commands

```bash
# Terminal 1: Start Backend
cd backend
npm install
npm run dev

# Terminal 2: Start Frontend (in new terminal)
cd frontend/vite-project
npm install
npm run dev
```

## 🎨 Styling System

### Colors
- Primary: `#00d4ff` (Cyan)
- Secondary: `#ff006e` (Pink)
- Background: `#0a0e27` (Dark)
- Text: `#e0e0e0` (Light)

### Animations
- `fadeInUp` - Fade & slide up
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `float` - Floating effect
- `glow` - Glow effect
- `morph` - Shape morphing

## 📱 Responsive Breakpoints

- Desktop: 1200px+ (full layout)
- Tablet: 768px - 1199px (adjusted grid)
- Mobile: Below 768px (single column)

## 🔒 Security Notes

- Backend validates all inputs
- Error messages don't expose internal details
- Database credentials in `.env` (not in git)
- CORS enabled for frontend origin

## 📚 Documentation

- [Backend Setup](backend/BACKEND_SETUP.md)
- [Frontend README](frontend/vite-project/FRONTEND_README.md)
- [Frontend Structure](frontend/vite-project/STRUCTURE.md)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push to repository

## 📞 Contact

- **Developer**: Manoj Katuwal
- **Email**: manoj@example.com
- **Location**: Kathmandu, Nepal

---

**Last Updated**: May 23, 2026
**Version**: 1.0.0
**Status**: Development ✨
