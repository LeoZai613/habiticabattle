import React from 'react';
import { getBossSpritePath } from '../../constants/spriteConfig';

interface BossSpriteProps {
  bossId: string;
  name: string;
}

export const BossSprite: React.FC<BossSpriteProps> = ({ bossId, name }) => {
  const [error, setError] = React.useState(false);
  const spritePath = getBossSpritePath(bossId);

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
        src={spritePath}
        alt={`${name} sprite`}
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
        onError={() => setError(true)}
      />
    </div>
  );
};