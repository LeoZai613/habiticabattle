import React from 'react';
import { getBossImagePath } from '../../constants/assetPaths';
import { Loader2 } from 'lucide-react';

interface EnemyImageProps {
  bossId: string;
  name: string;
}

export const EnemyImage: React.FC<EnemyImageProps> = ({ bossId, name }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const imagePath = getBossImagePath(bossId);

  const handleLoad = () => {
    setLoading(false);
    setError(null);
  };

  const handleError = () => {
    setLoading(false);
    setError('Failed to load image');
  };

  return (
    <div className="space-y-2">
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
            src={imagePath}
            alt={name}
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        
        {process.env.NODE_ENV === 'development' && error && (
          <div className="absolute bottom-0 left-0 right-0 text-xs text-red-500 bg-white/80 p-1">
            {error}
          </div>
        )}
      </div>
      
      {/* Debug Information */}
      <div className="text-xs text-gray-500 break-all">
        <div>Boss ID: {bossId}</div>
        <div>Status: {loading ? 'Loading' : error ? `Error: ${error}` : 'Loaded'}</div>
        <div>URL: {imagePath}</div>
        {error && <div className="text-red-500">Error: {error}</div>}
      </div>
    </div>
  );
};