import React from 'react';
import { useHabiticaUser } from '../../hooks/useHabiticaUser';
import { useEquipment } from '../../hooks/useEquipment';
import { calculateEquipmentBonus } from '../../utils/equipment/calculations';

export const EquipmentDebug = () => {
  const { userData, loading: userLoading, error: userError } = useHabiticaUser();
  const { equipmentData, loading: equipLoading, error: equipError } = useEquipment();

  if (userLoading || equipLoading) {
    return <div>Loading equipment data...</div>;
  }

  if (userError || equipError || !userData || !equipmentData) {
    return <div>Error loading equipment data</div>;
  }

  const equippedGear = userData.items.gear.equipped;
  const bonus = calculateEquipmentBonus(equippedGear, equipmentData);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Equipment Breakdown</h2>
      <div className="space-y-4">
        {Object.entries(equippedGear).map(([slot, itemKey]) => {
          const item = equipmentData[itemKey];
          if (!item) return null;

          return (
            <div key={slot} className="border-b pb-2">
              <div className="font-medium capitalize">{slot.replace(/([A-Z])/g, ' $1')}</div>
              <div className="text-sm text-gray-600">{item.text}</div>
              <div className="grid grid-cols-4 gap-2 mt-1">
                {item.str ? <span className="text-blue-600">STR +{item.str}</span> : null}
                {item.con ? <span className="text-green-600">CON +{item.con}</span> : null}
                {item.int ? <span className="text-purple-600">INT +{item.int}</span> : null}
                {item.per ? <span className="text-yellow-600">PER +{item.per}</span> : null}
              </div>
            </div>
          );
        })}
        
        <div className="mt-4 pt-2 border-t">
          <h3 className="font-bold mb-2">Total Bonuses</h3>
          <div className="grid grid-cols-4 gap-2">
            <span className="text-blue-600">STR +{bonus.str}</span>
            <span className="text-green-600">CON +{bonus.con}</span>
            <span className="text-purple-600">INT +{bonus.int}</span>
            <span className="text-yellow-600">PER +{bonus.per}</span>
          </div>
        </div>
      </div>
    </div>
  );
};