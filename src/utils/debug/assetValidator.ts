import { cleanPath } from '../paths';

export const validateAssetPath = (path: string) => {
  // Split path into segments and analyze each one
  const segments = path.split('/');
  const segmentAnalysis = segments.map((segment, index) => ({
    segment,
    index,
    isEmpty: segment.length === 0,
    isValid: segment.length > 0
  }));

  // Detailed validation results
  const validation = {
    originalPath: path,
    cleanedPath: cleanPath(path),
    segments: segmentAnalysis,
    isValid: segmentAnalysis.every(s => s.isValid),
    issues: {
      emptySegments: segmentAnalysis
        .filter(s => s.isEmpty)
        .map(s => `Empty segment at index ${s.index}`)
    }
  };

  console.log('Path Validation Details:', validation);
  
  return validation;
};

export const checkAssetAvailability = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    console.log(`Asset availability check for ${url}:`, response.ok);
    return response.ok;
  } catch (error) {
    console.error(`Asset availability check failed for ${url}:`, error);
    return false;
  }
};