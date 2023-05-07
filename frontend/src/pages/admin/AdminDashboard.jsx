import React, { useState, useEffect } from 'react';
import { getUser } from '../../utils/userAPI';
// import LogoutButton from '../../components/authComponents/LogoutButton';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
//import withAuth from '../../components/authComponents/withAuth';
import { useAuthStore } from '../../stores/authStore';

console.log('getUser called')
const AdminDashboard = () => {
  const [username, setUsername] = useState('Loading...');
  console.log('username: ', username)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();
        setUsername(response.username);
        console.log('username: ', username)
      } catch (error) {
        console.error(error);
        setUsername('Error');
      }
    }
    fetchUser();
  }, [username]);

  return (
<div className="flex">
      <AdminSidebar />
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, {username}!</p>
        {/* Add your content here */}
        {/*<LogoutButton />*/}
      </div>
    </div>
  );
};

export default AdminDashboard;
