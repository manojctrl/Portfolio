# Backend Setup Guide

## 📋 What's Been Created

### 1. **Models** (`/models/Project.js`)
- Project database model with full CRUD methods
- Static methods: create(), getAll(), getById(), update(), delete()
- Handles database queries with MySQL

### 2. **Controllers** (`/controllers/projectController.js`)
- Business logic for handling API requests
- Methods: createProject, getAllProjects, getProjectById, updateProject, deleteProject
- Input validation and error handling

### 3. **Routes** (`/routes/projectRoutes.js`)
- REST API endpoints for projects:
  - `POST /api/projects` - Create new project
  - `GET /api/projects` - Get all projects
  - `GET /api/projects/:id` - Get single project
  - `PUT /api/projects/:id` - Update project
  - `DELETE /api/projects/:id` - Delete project

### 4. **Middleware** (`/middleware/errorHandler.js`)
- Global error handling middleware
- Catches and formats errors consistently

### 5. **Database** (`/database/schema.sql`)
- SQL schema for projects table
- Fields: title, description, image, link, technologies, dates, timestamps

---

## 🚀 Getting Started

### Step 1: Set up Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your database credentials
```

### Step 2: Create Database and Table
```bash
# Use MySQL client
mysql -u root -p

# Then run the SQL file
mysql -u root -p < backend/database/schema.sql
```

Or copy and paste the contents of `database/schema.sql` in your MySQL client.

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start the Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

---

## 📌 API Endpoints

### 1. **Create Project** (POST)
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "image": "https://example.com/image.jpg",
    "link": "https://example.com",
    "technologies": "React, Node.js, MongoDB",
    "startDate": "2024-01-01",
    "endDate": "2024-12-31"
  }'
```

### 2. **Get All Projects** (GET)
```bash
curl http://localhost:5000/api/projects
```

### 3. **Get Single Project** (GET)
```bash
curl http://localhost:5000/api/projects/1
```

### 4. **Update Project** (PUT)
```bash
curl -X PUT http://localhost:5000/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Project",
    "description": "Updated description"
  }'
```

### 5. **Delete Project** (DELETE)
```bash
curl -X DELETE http://localhost:5000/api/projects/1
```

---

## 📁 Project Structure
```
backend/
├── server.js                    ✅ Main server with routes
├── config/db.js                 ✅ Database connection
├── models/Project.js            ✅ Database model
├── controllers/projectController.js  ✅ Business logic
├── routes/projectRoutes.js      ✅ API endpoints
├── middleware/errorHandler.js   ✅ Error handling
├── database/schema.sql          ✅ Database schema
├── .env.example                 ✅ Environment template
├── package.json                 ✅ Dependencies
└── .env                         (Create from .env.example)
```

---

## ⚠️ Important Notes

1. **Create `.env` file** - Copy from `.env.example` and add your MySQL credentials
2. **Create database** - Run `schema.sql` to create the portfolio_db and projects table
3. **Install dependencies** - Run `npm install` if not done already
4. **Start server** - Use `npm run dev` for development

---

## 🔧 Environment Variables

```
PORT=5000                    # Server port
DB_HOST=localhost            # MySQL host
DB_USER=root                 # MySQL user
DB_PASSWORD=your_password    # MySQL password
DB_NAME=portfolio_db         # Database name
NODE_ENV=development         # Environment (development/production)
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `Error: Cannot find module 'mysql2'` | Run `npm install` |
| `ECONNREFUSED` | Check MySQL is running and credentials in `.env` |
| `Table doesn't exist` | Run `database/schema.sql` in MySQL |
| `Port 5000 already in use` | Change PORT in `.env` |

---

**Everything is set up! Start with: `npm run dev`** ✅
