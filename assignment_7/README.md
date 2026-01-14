# E-Commerce App - Assignment 7

A complete React E-Commerce application built with Vite, Zustand, TailwindCSS, and React Router.

## 🚀 Features

- **Product Listing** - Fetch and display products from FakeStore API
- **Search Functionality** - Real-time search across product titles
- **Filtering** - Filter by category and price range
- **Sorting** - Sort by price (low/high), rating, and name
- **Product Details** - Detailed product page with specifications
- **Shopping Cart** - Add, remove, and update product quantities
- **Persistent Cart** - Cart data persists across sessions using Zustand
- **Checkout Form** - Complete checkout with form validation
- **Light/Dark Mode** - Theme switching with Zustand store
- **Responsive Design** - Mobile-friendly layout using TailwindCSS
- **Form Validation** - Email, phone, card, and address validation

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **FakeStore API** - Product data source

## 🛠️ Installation & Setup

```bash
# Navigate to the project directory
cd assignment_7

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation and theme toggle
│   ├── ProductCard.jsx      # Product display card
│   ├── ProductFilters.jsx   # Search, filter, and sort controls
│   ├── CartItem.jsx         # Shopping cart item
│   └── CheckoutForm.jsx     # Checkout form with validation
├── pages/
│   ├── ProductsPage.jsx     # Products listing with filters
│   ├── ProductDetailPage.jsx # Product detail view
│   ├── CartPage.jsx         # Shopping cart page
│   └── CheckoutPage.jsx     # Checkout page
├── store/
│   ├── cartStore.js         # Zustand cart state management
│   └── themeStore.js        # Zustand theme state management
├── utils/
│   ├── api.js               # FakeStore API client
│   └── validators.js        # Form validation utilities
├── App.jsx                  # Main app component with routing
├── main.jsx                 # React entry point
└── index.css                # TailwindCSS imports
```

## 🎨 Key Features Explained

### State Management with Zustand

**Cart Store** (`src/store/cartStore.js`):
- Persists cart data to localStorage
- Methods: `addItem()`, `removeItem()`, `updateQuantity()`, `clearCart()`

**Theme Store** (`src/store/themeStore.js`):
- Toggle between light and dark modes
- Persists theme preference

### API Integration

Uses FakeStore API endpoints:
- `GET /products` - Fetch all products
- `GET /products/{id}` - Get product details
- `GET /products/categories` - Get product categories
- `GET /products/category/{category}` - Get products by category

### Responsive Design

- Mobile-first approach with TailwindCSS
- Grid layouts that adapt to screen size
- Touch-friendly buttons and inputs
- Optimized images

### Form Validation

Validates:
- Email format
- Phone number format
- Card number (13-19 digits)
- CVV (3-4 digits)
- Zip code
- Required fields

## 🔧 Usage

### Adding Products to Cart

1. Browse products on the home page
2. Click "Add to Cart" on any product card
3. Or view product details and choose quantity before adding

### Filtering Products

- Use the search box to find products by name
- Select a category from the dropdown
- Adjust price range with the slider
- Choose sorting option (price, rating, name)

### Checkout Process

1. Click "Cart" in the header
2. Review items and quantities
3. Click "Proceed to Checkout"
4. Fill in shipping and payment information
5. Complete purchase

### Theme Toggle

Click the sun/moon icon in the header to toggle between light and dark modes.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import repository in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Deploy to Netlify

1. Build locally: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect GitHub for automatic deployments

## 📝 Sample Deployment Commands

```bash
# Build the app
npm run build

# This creates a 'dist' folder that can be deployed to any static hosting service
```

## 🐛 Troubleshooting

**API calls failing**: Make sure you have internet connection. FakeStore API is a public API.

**Cart not persisting**: Check browser console for localStorage errors. Clear cache and try again.

**Theme not toggling**: Ensure Zustand is properly installed and the store is initialized.

## 📄 License

This project is part of the Upzenix assignments and is open source.

## 🤝 Contributing

This is an educational project. Feel free to modify and enhance it as needed.
