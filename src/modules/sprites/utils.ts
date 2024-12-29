import { SPRITE_PATHS } from './constants';
import type { SpritePosition } from './types';

export const getSpriteUrl = (sheetName: keyof typeof SPRITE_PATHS.SHEETS): string => {
  return `${SPRITE_PATHS.BASE_URL}/${SPRITE_PATHS.SHEETS[sheetName]}`;
};

export const createSpriteStyle = (position: SpritePosition, sheetName: keyof typeof SPRITE_PATHS.SHEETS): React.CSSProperties => {
  return {
    width: `${position.width}px`,
    height: `${position.height}px`,
    background: `url(${getSpriteUrl(sheetName)}) -${position.x}px -${position.y}px`,
    imageRendering: 'pixelated'
  };
};