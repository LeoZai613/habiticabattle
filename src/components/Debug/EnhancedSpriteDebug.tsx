import React, { useEffect, useState } from 'react';
import { validateAssetPath, checkAssetAvailability } from '../../utils/debug/assetValidator';

interface EnhancedSpriteDebugProps {
  imagePath: string | null;
  error: Error | null;
  attempted: boolean;
}

export const EnhancedSpriteDebug: React.FC<EnhancedSpriteDebugProps> = ({
  imagePath,
  error,
  attempted
}) => {
  const [validation, setValidation] = useState<ReturnType<typeof validateAssetPath> | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (imagePath) {
      setValidation(validateAssetPath(imagePath));
      checkAssetAvailability(imagePath).then(setIsAvailable);
    }
  }, [imagePath]);

  if (!attempted || !imagePath) return null;

  return (
    <div className="mt-2 text-xs font-mono">
      <div className="bg-gray-100 p-2 rounded space-y-2">
        <div>
          <strong>Asset Debug Info:</strong>
          <ul className="mt-1 space-y-1">
            <li>Path: {imagePath}</li>
            <li>Status: {error ? '❌ Error' : '✅ Success'}</li>
            <li>Available: {isAvailable === null ? '⏳ Checking...' : isAvailable ? '✅ Yes' : '❌ No'}</li>
          </ul>
        </div>

        {validation && (
          <div>
            <strong>Validation:</strong>
            <ul className="mt-1 space-y-1">
              {Object.entries(validation.issues).map(([key, issue]) => (
                issue && (
                  <li key={key} className="text-red-500">
                    ❌ {issue}
                  </li>
                )
              ))}
              {validation.isValid && (
                <li className="text-green-500">✅ Path format is valid</li>
              )}
            </ul>
          </div>
        )}

        {error && (
          <div className="text-red-500">
            <strong>Error Details:</strong>
            <p className="mt-1">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};