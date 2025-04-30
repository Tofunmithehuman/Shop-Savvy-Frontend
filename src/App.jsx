import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderConfirmation from './pages/OrderConfirmation';
import SearchResults from './pages/SearchResults';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductListing /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/profile', element: <Profile /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/order/:id', element: <OrderConfirmation /> },
  { path: '/search', element: <SearchResults /> },
  { path: '/category/:categoryId', element: <Category /> },
  {
    path: '/admin',
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  { path: '*', element: <NotFound /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;