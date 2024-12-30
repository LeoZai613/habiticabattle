import React from 'react';
import { getBossSpritePath } from '../../constants/spriteConfig';
import { Loader2 } from 'lucide-react';

interface BossSpriteProps {
  bossId: string;
  name: string;
}

export const BossSprite: React.FC<BossSpriteProps> = ({ bossId, name }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const spritePath = getBossSpritePath(bossId);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg p-2 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
        </div>
      )}
      
      {error ? (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-400 text-xs text-center px-2">{name}</span>
        </div>
      ) : (
        <img 
          src={spritePath}
          alt={`${name} sprite`}
          className={`w-full h-full object-contain transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
          style={{ imageRendering: 'pixelated' }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};