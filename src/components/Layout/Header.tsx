import React from 'react';
import { User, Shield, Sword } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Habitica</h1>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Shield size={20} />
            <span>20/20</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Sword size={20} />
            <span>Level 1</span>
          </div>
          
          <button className="p-2 hover:bg-purple-600 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};