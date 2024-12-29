// Clean path by removing empty segments and extra slashes
export const cleanPath = (path: string): string => {
  return path
    .split('/')
    .filter(Boolean) // Remove empty segments
    .join('/');
};