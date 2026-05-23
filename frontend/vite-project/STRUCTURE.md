📁 Frontend Project Structure

```
src/
├── components/          → Reusable React components
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Projects.jsx
│   ├── Projects.css
│   ├── Skills.jsx
│   ├── Skills.css
│   ├── About.jsx
│   ├── About.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   └── Footer.css
│
├── pages/               → Page components (Future use)
│
├── hooks/               → Custom React hooks
│   └── useApi.js       → Custom hooks for data fetching
│
├── services/            → API services & utilities
│   └── api.js          → Backend API calls
│
├── layouts/             → Layout components (Future use)
│
├── assets/              → Static files (images, fonts, etc.)
│
├── App.jsx              → Main App component
├── App.css              → Global App styles
├── main.jsx             → Entry point
├── index.css            → Global styles
└── vite.config.js       → Vite configuration
```

## Component Organization

### Navigation
- **Navbar**: Sticky navigation with smooth scrolling

### Sections
- **Hero**: Landing section with typing animation
- **Projects**: Project showcase with API integration
- **Skills**: Skills categorization
- **About**: About me with stats
- **Contact**: Contact form
- **Footer**: Footer with links

### Utilities
- **hooks/useApi**: Custom hooks for data fetching
- **services/api**: Centralized API calls
- **assets**: Static files (images, icons, fonts)

## Features

✅ Responsive design
✅ Smooth scrolling & animations
✅ Backend API integration
✅ Modern UI with gradients
✅ Mobile-friendly navigation
✅ Dynamic content loading

## Running the Frontend

```bash
cd frontend/vite-project
npm install
npm run dev
```

Server will run on: http://localhost:5173
