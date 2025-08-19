import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-8 px-4 max-w-7xl">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Foodies</h2>
          <p className="mt-2 text-sm">Serving Love Since 2025</p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p>Demo Rode</p>
          <p>Kolkata, WB 700001</p>
          <p>Phone: 9000000000</p>
          <p>Email: foodies@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="" className="hover:text-white">
              Facebook
            </a>
            <a href="" className="hover:text-white">
              Instagram
            </a>
            <a href="" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 Foodies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
