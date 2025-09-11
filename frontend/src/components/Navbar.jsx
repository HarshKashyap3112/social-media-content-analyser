import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo- to-purple-700 dark:from-indigo-800 dark:to-purple-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300">
          Social Analyzer
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300 px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-900">
            Dashboard
          </Link>
          <Link to="/analytics" className="text-white hover:text-gray-200 transition duration-300 px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-900">
            Analytics
          </Link>
          {/* <Link to="/monitoring" className="text-white hover:text-gray-200 transition duration-300 px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-900">
            Monitoring
          </Link> */}
          {/* <Link to="/reports" className="text-white hover:text-gray-200 transition duration-300 px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-900">
            Reports
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;