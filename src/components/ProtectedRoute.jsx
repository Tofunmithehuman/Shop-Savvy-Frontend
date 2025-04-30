import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, role }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.role !== role) {
      return <Navigate to="/" />;
    }
    return children;
  } catch (error) {
    console.error("Token validation failed:", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;