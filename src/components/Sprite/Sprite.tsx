import React from 'react';
import { createSpriteStyle } from '../../modules/sprites/utils';
import { useSprite } from '../../modules/sprites/hooks/useSprite';
import type { SpriteConfig } from '../../modules/sprites/types';

interface SpriteProps {
  config: SpriteConfig;
  className?: string;
}

export const Sprite: React.FC<SpriteProps> = ({ config, className }) => {
  const { loaded, error } = useSprite(config);

  if (error) {
    return (
      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
        <span className="text-xs text-gray-400">!</span>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="w-8 h-8 bg-gray-100 rounded animate-pulse" />
    );
  }

  return (
    <div 
      className={className}
      style={createSpriteStyle(config.position, config.sheet)}
    />
  );
};