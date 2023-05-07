import React from 'react';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import UserTable from '../../components/adminComponents/UserTable';
//import withAuth from '../../components/authComponents/withAuth';


const UsersPage = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full p-6">
        <UserTable />
      </div>
    </div>
  );
};

export default UsersPage
