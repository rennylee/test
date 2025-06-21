import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-gray-900 text-2xl font-extrabold tracking-wider">Yu-Chen Lee</h1>

        <div className="flex space-x-6">
          <Link
            to="/#skills"
            className="text-gray-800 px-5 py-2 rounded-full hover:bg-gray-100 transition text-sm font-medium"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 px-5 py-2 rounded-full hover:bg-gray-100 transition text-sm font-medium"
          >
            Projects
          </Link>
          <a
            href="#contact"
            className="text-gray-800 px-5 py-2 rounded-full hover:bg-gray-100 transition text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
