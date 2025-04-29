Shop Savvy Frontend
This is the frontend for an e-commerce website built with Vite, React, and Tailwind CSS. It provides a user-friendly interface for browsing products, managing a cart, checking out, and an admin dashboard for managing products, orders, and users. React Router is used for navigation, and React Context handles authentication state.

Project Structure
frontend/
├── public/
│   ├── favicon.ico              # Website favicon
│   └── vite.svg                 # Vite logo (default)
├── src/
│   ├── assets/                  # Static assets (images, fonts, etc.)
│   │   └── logo.png             # Example logo for the app
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Navigation bar component
│   │   ├── Footer.jsx           # Footer component
│   │   ├── ProductCard.jsx       # Component for displaying a product
│   │   ├── ProtectedRoute.jsx   # Component to protect routes (e.g., admin)
│   │   └── Sidebar.jsx          # Sidebar for admin dashboard navigation
│   ├── context/                 # React Context for state management
│   │   └── AuthContext.jsx      # Authentication context for user and token
│   ├── pages/                   # Page components
│   │   ├── Home.jsx             # Home page with featured products
│   │   ├── ProductListing.jsx   # Product listing with filters
│   │   ├── ProductDetail.jsx    # Single product details
│   │   ├── Cart.jsx             # Shopping cart page
│   │   ├── Checkout.jsx         # Checkout page for order placement
│   │   ├── Profile.jsx          # User profile and order history
│   │   ├── Login.jsx            # User login page
│   │   ├── Register.jsx         # User registration page
│   │   ├── OrderConfirmation.jsx # Order confirmation page
│   │   ├── SearchResults.jsx    # Search results page
│   │   ├── Category.jsx         # Category-specific product listing
│   │   ├── AdminDashboard.jsx   # Admin dashboard for managing products, orders, users
│   │   └── NotFound.jsx         # 404 page for invalid routes
│   ├── routes/                  # Route definitions
│   │   └── Router.jsx           # React Router configuration
│   ├── styles/                  # Global styles
│   │   └── index.css            # Tailwind CSS and global styles
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point for React
│   └── index.html               # HTML template for Vite
├── .gitignore                   # Git ignore file
├── package.json                 # Node.js dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file

Key Components

Pages: Individual React components for each route (e.g., Home.jsx, AdminDashboard.jsx).
Components: Reusable UI elements like Navbar.jsx and ProductCard.jsx.
Context: AuthContext.jsx manages user authentication state (token and role).
Routes: Router.jsx defines client-side routes using React Router.
Styles: index.css includes Tailwind CSS directives and custom styles.

Setup Instructions
Prerequisites

Node.js (v16 or higher)
npm or yarn
Backend server running (see backend README for setup)

Installation

Clone the repository and navigate to the frontend/ directory:cd frontend


Install dependencies:npm install


Start the development server:npm run dev

The app will run on http://localhost:5173 (or the port specified by Vite).

Environment Setup

The frontend communicates with the backend at http://localhost:5000 by default. Ensure the backend is running and accessible.
If the backend is hosted elsewhere, update API endpoints in the frontend code (e.g., in axios calls).

Features

User Features:
Browse products by category or search.
Add products to cart and proceed to checkout.
View and update user profile, including order history.
Authentication (login and register).


Admin Features (accessible at /admin):
Manage products (create, update, delete).
View and update order statuses (e.g., Pending, Shipped, Delivered).
Manage users (view, delete).


Responsive Design: Built with Tailwind CSS for mobile and desktop compatibility.

Routes

/: Home page with featured products.
/products: Product listing page.
/product/:id: Product detail page.
/cart: Shopping cart.
/checkout: Order checkout.
/profile: User profile and order history.
/login: User login.
/register: User registration.
/order/:id: Order confirmation.
/search: Search results.
/category/:categoryId: Category-specific products.
/admin: Admin dashboard (protected, admin-only).
*: 404 page for invalid routes.

Admin Access

To access the admin dashboard (/admin), log in with a user account that has the admin role.
The backend controls role assignment. Set a user's role to admin in MongoDB (e.g., using MongoDB Compass) or via a script.
The ProtectedRoute.jsx component ensures only admins can access the dashboard.

Dependencies

react: Core React library.
react-dom: React DOM rendering.
react-router-dom: Client-side routing.
axios: HTTP client for API requests.
jwt-decode: Decode JWT tokens for role-based access.
vite: Build tool and development server.

Install dependencies via package.json:
{
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
}

Notes

Styling: Tailwind CSS is included via a CDN in index.html or configured in index.css. Customize styles in src/styles/index.css.
API Integration: The frontend uses axios to communicate with the backend at http://localhost:5000/api.
Security: Ensure JWT tokens are securely stored (e.g., in localStorage) and validated on each request.
Testing: Add unit tests for components and integration tests for API calls using Jest and React Testing Library.
Enhancements:
Add modals for product/user editing in the admin dashboard.
Implement pagination for product listings and search results.
Integrate a payment gateway (e.g., Stripe) for checkout.



Running the Frontend

Development: npm run dev (starts Vite dev server).
Production: Build with npm run build and serve the dist/ folder using a static server.

For issues or contributions, please open a pull request or issue on the repository.
