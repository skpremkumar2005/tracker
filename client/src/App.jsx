import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import HabitTracker from './components/habits/HabitTracker';
import WorkoutTracker from './components/fitness/WorkoutTracker';
import Login from './pages/Login';
import Register from './pages/Register';
import useAuth from './hooks/useAuth';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }
  
  return (
    <div className="flex h-screen bg-gray-100">
      {user ? (
        <>
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/habits" element={<HabitTracker />} />
                <Route path="/fitness" element={<WorkoutTracker />} />
                {/* Add other protected routes here */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;