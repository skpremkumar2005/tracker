import React from 'react';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div>
        <h1 className="text-xl font-semibold">Welcome, {user?.profile?.name}!</h1>
      </div>
      <div>
        <button onClick={logout} className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;