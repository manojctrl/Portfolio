# 🎨 Manoj Katuwal's Portfolio - Frontend

A modern, creative portfolio website built with **React + Vite** featuring smooth animations, gradient designs, and full backend integration.

## 📁 Project Structure

```
frontend/vite-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── pages/              # Page layouts (future expansion)
│   ├── layouts/            # Layout components (future expansion)
│   ├── assets/             # Images, fonts, static files
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── main.jsx            # Vite entry point
│   └── index.css           # Global styles
├── public/                 # Static files
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── STRUCTURE.md            # Detailed structure
```

## 🎯 Key Features

✨ **Modern Design**
- Gradient backgrounds with animated shapes
- Smooth scroll animations
- Glowing effects and hover states
- Responsive layout

🚀 **Performance**
- Built with Vite for fast development
- Optimized component structure
- Lazy loading ready

🔗 **Full-Stack Integration**
- Connected to Node.js/Express backend
- API service layer for clean data fetching
- Custom React hooks for reusable logic

📱 **Mobile Responsive**
- Mobile-first approach
- Touch-friendly navigation
- Adaptive layouts

## 🛠️ Tech Stack

- **React 19.2.6** - UI library
- **Vite 8** - Build tool
- **CSS3** - Modern styling with animations
- **Fetch API** - Backend communication

## 📦 Installation

```bash
# Navigate to frontend directory
cd frontend/vite-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend should be running on: http://localhost:5000

### Production Build
```bash
npm run build
npm run preview
```

## 📂 Component Organization

### Navigation & Layout
- **Navbar** - Sticky navigation with smooth scrolling
- **Footer** - Footer with social links and copyright

### Content Sections
- **Hero** - Landing section with typing animation
- **Projects** - Showcase projects from backend
- **Skills** - Skills in categories
- **About** - About me with statistics
- **Contact** - Contact form and methods

## 🔌 API Integration

### Backend Connection
The frontend connects to the backend at `http://localhost:5000/api`

### Available Endpoints
```
GET    /api/projects       - Fetch all projects
POST   /api/projects       - Create new project
GET    /api/projects/:id   - Get single project
PUT    /api/projects/:id   - Update project
DELETE /api/projects/:id   - Delete project
```

### Services
- **services/api.js** - Centralized API calls

### Custom Hooks
- **hooks/useApi.js** - Custom hooks for data fetching

## 🎨 Styling

### Color Scheme
```css
--primary: #00d4ff        /* Cyan */
--secondary: #ff006e      /* Pink */
--bg: #0a0e27            /* Dark blue */
--accent: #00f5ff        /* Light cyan */
```

### Global Styles
- **index.css** - CSS variables and base styles
- **App.css** - Application-wide animations
- **Component.css** - Component-specific styles

## 🔧 Customization

### Update Navbar Links
Edit [src/components/Navbar.jsx](src/components/Navbar.jsx) - `scrollToSection` function

### Update Contact Info
Edit [src/components/Contact.jsx](src/components/Contact.jsx) - Contact methods array

### Add More Projects
Use the Contact form or backend API to add projects

### Change Colors
Update CSS variables in [src/index.css](src/index.css) and [src/App.css](src/App.css)

## 📝 Future Enhancements

- [ ] Admin dashboard for project management
- [ ] Blog section
- [ ] Testimonials
- [ ] Dark/Light mode toggle
- [ ] i18n (Multi-language support)
- [ ] SEO optimization
- [ ] Analytics integration

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Cannot connect to backend
- Ensure backend is running on port 5000
- Check CORS is enabled in backend
- Verify API_BASE_URL in [src/services/api.js](src/services/api.js)

### Components not showing
- Clear browser cache
- Rebuild: `npm run build`
- Check browser console for errors

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

## 📄 License

This project is personal portfolio. All rights reserved.

---

**Built with ❤️ using React & Vite**

For backend setup, see [Backend README](../../backend/BACKEND_SETUP.md)
