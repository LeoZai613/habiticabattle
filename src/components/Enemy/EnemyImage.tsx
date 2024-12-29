import React from 'react';
import { getBossImage } from '../../constants/imageAssets';

interface EnemyImageProps {
  bossId: string;
  name: string;
}

export const EnemyImage: React.FC<EnemyImageProps> = ({ bossId, name }) => {
  const [error, setError] = React.useState(false);
  const imageUrl = getBossImage(bossId);

  if (error) {
    return (
      <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg">
        <span className="text-gray-400 text-xs text-center px-2">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg p-2">
      <img 
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
        onError={() => setError(true)}
      />
    </div>
  );
};