/**
 * Utility functions for handling asset paths
 */
export const cleanPath = (path: string): string => {
  return path
    .split('/')
    .filter(Boolean)
    .join('/');
};

export const createPublicPath = (path: string): string => {
  const cleaned = cleanPath(path);
  return cleaned.startsWith('/') ? cleaned.slice(1) : cleaned;
};