import React from 'react';

interface SpriteDebugProps {
  imagePath: string | null;
  error: Error | null;
  attempted: boolean;
}

export const SpriteDebug: React.FC<SpriteDebugProps> = ({ imagePath, error, attempted }) => {
  if (!attempted) return null;

  return (
    <div className="mt-2 text-xs font-mono">
      <div className="bg-gray-100 p-2 rounded">
        <p><strong>Status:</strong> {error ? '❌ Error' : '✅ Success'}</p>
        <p><strong>URL:</strong> {imagePath || 'N/A'}</p>
        {error && (
          <p className="text-red-500">
            <strong>Error:</strong> {error.message}
          </p>
        )}
      </div>
    </div>
  );
};