import { useState, useEffect } from 'react';
import { getSpriteUrl } from '../utils';
import type { SpriteConfig } from '../types';

export const useSprite = (config: SpriteConfig) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = getSpriteUrl(config.sheet);
    
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(new Error(`Failed to load sprite sheet: ${config.sheet}`));
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [config.sheet]);

  return { loaded, error };
};