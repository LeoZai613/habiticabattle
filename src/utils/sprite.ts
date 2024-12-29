import { cleanPath } from './paths';

export const getSpriteUrl = (path: string): string => {
  // Ensure path starts with a single slash and has no empty segments
  const cleanedPath = cleanPath(path);
  return cleanedPath.startsWith('/') ? cleanedPath : `/${cleanedPath}`;
};

export const createSpriteStyle = (pixelated: boolean): React.CSSProperties => ({
  imageRendering: pixelated ? 'pixelated' : 'auto',
  display: 'block', // Prevent unwanted spacing
  maxWidth: '100%',
  height: 'auto'
});