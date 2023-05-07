import React from "react";

const bgImage =
  "https://images.unsplash.com/photo-1593309404036-8e39088b6071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl mb-4 font-bold">Willkommen auf Farmslips</h1>
        <p className="text-2xl mb-8">Hier wird dein Wunsch wahr</p>
        <div className="space-x-4">
          <a
            href="/register"
            className="bg-appRose hover:bg-appGreen px-6 py-3 rounded-md font-medium text-white hover:text-black"
          >
            Registrieren
          </a>
          <a
            href="/login"
            className="bg-appPink hover:bg-appGreen px-6 py-3 rounded-md font-medium text-white hover:text-black"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
