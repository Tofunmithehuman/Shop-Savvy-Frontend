# 🛍️ Shop Savvy Frontend

**Shop Savvy** is the frontend of a full-featured e-commerce platform built with **Vite**, **React**, and **Tailwind CSS**. It offers a seamless user experience for browsing products, managing a cart, placing orders, and administering store data through a secure dashboard.

---

## 🔧 Tech Stack

- **Vite** – Lightning-fast frontend tooling
- **React** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework
- **React Router** – Client-side routing
- **React Context** – Global state management (auth)
- **Axios** – HTTP client
- **JWT Decode** – Role-based route protection

---

## 🗂️ Project Structure

```
frontend/
├── public/                     # Static files
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/                 # App assets (e.g. logo)
│   ├── components/             # Reusable UI components
│   ├── context/                # Authentication context
│   ├── pages/                  # App pages/routes
│   ├── routes/                 # React Router configuration
│   ├── styles/                 # Tailwind CSS and global styles
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # React entry point
│   └── index.html              # HTML template
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Features

### 🛒 User Features

- Browse products by **category** or **search**
- Add products to **cart**, proceed to **checkout**
- View & edit **profile** and order history
- **Authentication**: Login & Register

### 🔐 Admin Features

Accessible via `/admin` (admin-only):

- **Manage Products**: Create, update, delete
- **Manage Orders**: Update status (Pending, Shipped, Delivered)
- **Manage Users**: View and delete users

---

## 📍 Routes

| Path                     | Description                              |
|--------------------------|------------------------------------------|
| `/`                      | Home page with featured products         |
| `/products`              | All products listing                     |
| `/product/:id`           | Single product detail                    |
| `/cart`                  | Shopping cart                            |
| `/checkout`              | Checkout page                            |
| `/profile`               | User profile and order history           |
| `/login`                 | Login page                               |
| `/register`              | Registration page                        |
| `/order/:id`             | Order confirmation                       |
| `/search`                | Search results                           |
| `/category/:categoryId`  | Filtered by category                     |
| `/admin`                 | Admin dashboard (protected route)        |
| `*`                      | 404 – Not Found                          |

---

## 🔐 Admin Access

To access `/admin`:

1. Login with an **admin user** account.
2. Assign the `admin` role manually via:
   - **MongoDB Compass**
   - A custom script or backend admin API

The `ProtectedRoute.jsx` component ensures only admins access dashboard routes.

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js **v16+**
- npm or yarn
- Backend API server running at `http://localhost:5000`

### 🧰 Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🌐 API Integration

- Axios is used for API calls to: `http://localhost:5000/api`
- Update API URLs in axios calls if backend is hosted elsewhere

---

## 🧪 Testing

- Use **Jest** and **React Testing Library** for:
  - Unit tests (components)
  - Integration tests (API calls)

---

## 🎨 Styling

- Tailwind CSS included via:
  - `src/styles/index.css`
  - CDN in `index.html` (if applicable)
- Customize styling via Tailwind configuration and global CSS

---

## 🧩 Dependencies

```json
"dependencies": {
  "axios": "^1.6.0",
  "jwt-decode": "^3.1.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.15.0"
},
"devDependencies": {
  "vite": "^4.4.9"
}
```

---

## ✨ Enhancements To Consider

- Add modals for product/user editing
- Pagination on product listings & search
- Stripe or another payment gateway integration

---

## 📦 Production Build

```bash
# Build for production
npm run build

# Serve from dist folder
npm run preview
```

---

## 🤝 Contributions

Found a bug or want to contribute?

- Open an **issue** or **pull request** on GitHub
- Follow the existing coding style and add test coverage when possible
