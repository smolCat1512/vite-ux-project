export const getTextGlow = (
  color?: string,
  enabled?: boolean,
  intensity: number = 1
): string | undefined => {
  if (!enabled || !color) return undefined;

  const base = 4 * intensity;

  return `
    0 0 ${base}px ${color},
    0 0 ${base * 2}px ${color},
    0 0 ${base * 4}px ${color}
  `;
};

export const getIconGlow = (
  color?: string,
  enabled?: boolean,
  intensity: number = 1
): string | undefined => {
  if (!enabled || !color) return undefined;

  const base = 4 * intensity;

  return `
    drop-shadow(0 0 ${base}px ${color})
    drop-shadow(0 0 ${base * 2}px ${color})
    drop-shadow(0 0 ${base * 4}px ${color})
  `;
};
