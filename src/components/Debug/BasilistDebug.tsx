import React, { useEffect, useState } from 'react';
import { validateAssetPath, checkAssetAvailability } from '../../utils/debug/assetValidator';
import { cleanPath } from '../../utils/paths';

interface PathValidationInfo {
  originalPath: string;
  cleanedPath: string;
  segments: Array<{
    segment: string;
    index: number;
    isEmpty: boolean;
    isValid: boolean;
  }>;
  isValid: boolean;
  issues: {
    emptySegments: string[];
  };
}

export const BasilistDebug: React.FC = () => {
  const [pathValidation, setPathValidation] = useState<PathValidationInfo | null>(null);
  
  useEffect(() => {
    const path = 'sprites/bosses/basilist.png';
    const validation = validateAssetPath(path);
    setPathValidation(validation);
    
    console.log('Path Analysis:', {
      original: path,
      cleaned: cleanPath(path),
      segments: path.split('/'),
      validation
    });
  }, []);

  if (!pathValidation) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Basilist Sprite Path Debug</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Path Analysis</h3>
          <pre className="bg-gray-50 p-2 rounded mt-2 text-sm">
            {JSON.stringify({
              originalPath: pathValidation.originalPath,
              cleanedPath: pathValidation.cleanedPath,
              isValid: pathValidation.isValid
            }, null, 2)}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold">Segment Analysis</h3>
          <div className="mt-2 space-y-1">
            {pathValidation.segments.map((segment, index) => (
              <div 
                key={index}
                className={`text-sm p-2 rounded ${
                  segment.isEmpty ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                }`}
              >
                {`[${index}] ${segment.segment || '<empty>'}: ${
                  segment.isEmpty ? '❌ Empty' : '✅ Valid'
                }`}
              </div>
            ))}
          </div>
        </div>

        {pathValidation.issues.emptySegments.length > 0 && (
          <div>
            <h3 className="font-semibold text-red-600">Issues Found</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-red-600">
              {pathValidation.issues.emptySegments.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};