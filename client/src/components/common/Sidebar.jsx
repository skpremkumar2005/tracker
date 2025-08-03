import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 p-4 text-white bg-gray-800">
      <h2 className="mb-8 text-2xl font-bold">Consistency</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="hover:text-blue-300">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/fitness" className="hover:text-blue-300">Fitness</Link>
          </li>
          <li className="mb-4">
            <Link to="/reading" className="hover:text-blue-300">Reading</Link>
          </li>
          <li className="mb-4">
            <Link to="/habits" className="hover:text-blue-300">Habits</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;