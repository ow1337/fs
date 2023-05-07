import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from '../pages/admin/AdminDashboard';
import UsersPage from '../pages/admin/UsersPage';

function AdminRoutes() {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default AdminRoutes;
