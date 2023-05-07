import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

function LogoutButton(props) {
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <button onClick={handleLogout} className="bg-appPink hover:bg-appRose px-6 py-3 rounded-md font-medium text-white">
      Logout
    </button>
  );
}

export default LogoutButton;
