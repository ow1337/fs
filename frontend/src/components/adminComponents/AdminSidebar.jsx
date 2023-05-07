import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../authComponents/LogoutButton';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-gray-100 h-screen w-1/5">
      <div className="text-xl font-bold p-6 border-b border-appPink">Admin Panel</div>
      <div className="p-5"><LogoutButton /></div>
      <nav className="mt-6">
        <NavLink
          exact="true"
          to="/admin/"
          activeclassname="text-white bg-gray-900"
          className="block py-2 px-4 hover:text-white"
        >
          Dashboard
        </NavLink>
        <NavLink
          exact="true"
          to="/admin/users"
          activeclassname="text-white bg-gray-900"
          className="block py-2 px-4 hover:text-white"
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
