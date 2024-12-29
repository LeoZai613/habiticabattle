import React from 'react';
import { useInventory } from '../../hooks/useInventory';

export const InventoryList = () => {
  const { inventory, loading, error } = useInventory();

  if (loading) {
    return <div className="bg-white p-4 rounded-lg shadow-md">Loading inventory...</div>;
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Inventory</h2>
        <p className="text-red-500">Failed to load inventory. Please try again later.</p>
      </div>
    );
  }

  if (!inventory) return null;

  const renderInventorySection = (title: string, items: Record<string, number>) => {
    if (!items || Object.keys(items).length === 0) return null;

    return (
      <div className="mb-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(items).map(([key, count]) => (
            <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">{count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      {renderInventorySection('Eggs', inventory.eggs)}
      {renderInventorySection('Hatching Potions', inventory.hatchingPotions)}
      {renderInventorySection('Food', inventory.food)}
      {inventory.pets && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Pets</h3>
          <p className="text-sm text-gray-600">{Object.keys(inventory.pets).length} pets collected</p>
        </div>
      )}
      {inventory.mounts && (
        <div>
          <h3 className="font-semibold mb-2">Mounts</h3>
          <p className="text-sm text-gray-600">{Object.keys(inventory.mounts).length} mounts collected</p>
        </div>
      )}
    </div>
  );
};