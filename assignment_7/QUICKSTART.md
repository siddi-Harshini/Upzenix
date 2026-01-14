# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Installation

```bash
# 1. Navigate to project
cd assignment_7

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

The app will be live with hot-reload enabled!

---

## 📦 What You Get

✅ **Product Listing** - Browse 20+ products from FakeStore API
✅ **Search & Filter** - Find products by name, category, or price
✅ **Product Details** - View full specs and reviews
✅ **Shopping Cart** - Persistent cart with add/remove/update
✅ **Checkout** - Complete form with validation
✅ **Dark Mode** - Light/Dark theme toggle
✅ **Responsive** - Works on mobile, tablet, desktop

---

## 📱 Test the App

### Feature Checklist

- [ ] **Search:** Type in search box to find products
- [ ] **Filter:** Select category and adjust price range
- [ ] **Sort:** Sort by price, rating, or name
- [ ] **Product:** Click any product to see details
- [ ] **Cart:** Add products and view shopping cart
- [ ] **Checkout:** Fill form and see validation
- [ ] **Theme:** Click sun/moon icon to toggle dark mode

---

## 🛠️ Development Commands

```bash
# Start dev server on http://localhost:3000
npm run dev

# Build for production (creates dist folder)
npm run build

# Preview production build locally
npm run preview

# Format code with Prettier
npm run format

# Check for linting issues
npm run lint
```

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app component |
| `src/pages/` | Page components (Products, Cart, Checkout) |
| `src/components/` | Reusable components |
| `src/store/` | Zustand stores (cart, theme) |
| `src/utils/api.js` | API client |
| `vite.config.js` | Vite configuration |
| `tailwind.config.js` | TailwindCSS settings |
| `package.json` | Dependencies and scripts |

---

## 🌐 Deploy in 2 Minutes

### Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Connect GitHub repository
4. Click Deploy
5. Done! ✨

Your app is live at: `https://your-project.vercel.app`

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Modules not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**API calls failing?**
- Check internet connection
- FakeStore API is public, should work everywhere

**Build failing?**
```bash
npm run build
```

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com)

---

## 💡 Tips & Tricks

**Hot Reload:** Changes save instantly without refresh
**localStorage:** Cart and theme preference persist across sessions
**Dark Mode:** Toggle in header, saves your preference
**API:** Data comes from real FakeStore API
**Forms:** All validations work in real-time

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ✅ Test the features
5. ✅ Deploy to Vercel/Netlify

Happy coding! 🚀

