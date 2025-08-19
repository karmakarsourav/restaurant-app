import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./modal/Login";
import Register from "./modal/Register";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const activeLinkCSS = ({ isActive }) =>
    isActive
      ? "text-blue-700 underline decoration-blue-600 underline-offset-4 decoration-2"
      : "hover:text-blue-700 hover:underline hover:decoration-blue-600 hover:underline-offset-4 hover:decoration-2";

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center text-gray-700 text-xl font-semibold">
        <div className="text-sm md:text-xl">Restaurant App</div>
        <nav className="hidden md:flex gap-4">
          <NavLink to="/" className={activeLinkCSS}>
            Home
          </NavLink>
          <NavLink to="/menu" className={activeLinkCSS}>
            Menu
          </NavLink>
          <NavLink to="/about" className={activeLinkCSS}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeLinkCSS}>
            Contact
          </NavLink>
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
          <NavLink
            to="/"
            className={activeLinkCSS}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink to="/menu" className={activeLinkCSS} onClick={() => setIsMobileMenuOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/about" className={activeLinkCSS} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeLinkCSS} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
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
