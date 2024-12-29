import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckSquare, ListTodo, Trophy } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/habits" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <CheckSquare size={20} />
          <span>Habits</span>
        </Link>
        <Link to="/tasks" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <ListTodo size={20} />
          <span>Tasks</span>
        </Link>
        <Link to="/rewards" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <Trophy size={20} />
          <span>Rewards</span>
        </Link>
      </nav>
    </aside>
  );
};