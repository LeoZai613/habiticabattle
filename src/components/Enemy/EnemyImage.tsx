import React from 'react';
import { getBossImage } from '../../constants/imageAssets';
import { Loader2 } from 'lucide-react';

interface EnemyImageProps {
  bossId: string;
  name: string;
}

export const EnemyImage: React.FC<EnemyImageProps> = ({ bossId, name }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const imageUrl = getBossImage(bossId);

  // Function to test if the image URL is accessible
  const testImageUrl = React.useCallback(async () => {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      console.log(`[Image Debug] HEAD request for ${bossId}:`, {
        status: response.status,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (err) {
      console.error(`[Image Debug] Failed to check ${bossId} image:`, err);
    }
  }, [imageUrl, bossId]);

  React.useEffect(() => {
    testImageUrl();
  }, [testImageUrl]);

  const handleLoad = () => {
    setLoading(false);
    setError(null);
    console.log(`[Image Debug] Successfully loaded image for ${bossId}`);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoading(false);
    const imgElement = e.target as HTMLImageElement;
    setError(imgElement.error?.message || 'Failed to load image');
    console.error(`[Image Debug] Error loading ${bossId} image:`, {
      error: imgElement.error,
      src: imgElement.src,
      naturalWidth: imgElement.naturalWidth,
      naturalHeight: imgElement.naturalHeight
    });
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
            src={imageUrl}
            alt={name}
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ imageRendering: 'pixelated' }}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
      
      {/* Debug Information */}
      <div className="text-xs text-gray-500 break-all">
        <div>Boss ID: {bossId}</div>
        <div>Status: {loading ? 'Loading' : error ? `Error: ${error}` : 'Loaded'}</div>
        <div>URL: {imageUrl}</div>
        {error && <div className="text-red-500">Error: {error}</div>}
      </div>
    </div>
  );
};