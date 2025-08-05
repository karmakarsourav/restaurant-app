import React, { useState } from "react";
import Login from "./modal/Login";
import Register from "./modal/Register";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center text-gray-700 text-xl font-semibold">
        <div className="text-sm md:text-xl">Restaurant App</div>
        <nav className="hidden md:flex gap-4">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>

        <div className="hidden md:flex gap-4">
          <button
            className="cursor-pointer hover:text-gray-900"
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
          <button
            className="cursor-pointer hover:text-gray-900"
            onClick={() => setRegisterModal(true)}
          >
            Register
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prevValue) => !prevValue)}
            className="cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {loginModal && <Login onClose={() => setLoginModal(false)} />}
      {registerModal && <Register onClose={() => setRegisterModal(false)} />}

      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden gap-2 text-gray-700 px-4 pb-4">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <button
            className="cursor-pointer text-left hover:text-gray-900"
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
          <button
            className="cursor-pointer text-left hover:text-gray-900"
            onClick={() => setRegisterModal(true)}
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
