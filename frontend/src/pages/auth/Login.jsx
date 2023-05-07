// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../stores/authStore';
import { performLogin } from '../../utils/userAPI';
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await performLogin(username, password);
      navigate('/admin'); // redirect to /admin on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-appMain dark:bg-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4 lg:w-1/2 rounded-md overflow-hidden shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-700 w-full md:w-1/2 flex items-center justify-center px-6 py-8">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Login
            </h2>
            {error && (
              <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-white font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-appPink hover:bg-appGreen px-6 py-3 rounded-md font-medium text-white hover:text-black"
                type="submit"
              >
                Login
              </button>
              <a
                href="/register"
                className="bg-appGreen hover:bg-appPink px-6 py-3 rounded-md font-medium text-black hover:text-white"
              >
                Registrieren
              </a>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src="https://img.joomcdn.net/ca2bde8ad2fa4f0353f25af1d63164ad9f863792_original.jpeg"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
