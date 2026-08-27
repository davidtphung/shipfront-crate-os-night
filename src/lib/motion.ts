export const easeEnter = [0.16, 1, 0.3, 1] as const;
export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const easeStandard = [0.4, 0, 0.2, 1] as const;

export const duration = {
  dissolve: 0.08,
  hover: 0.22,
  micro: 0.14,
  fast: 0.2,
  ui: 0.3,
  standard: 0.45,
  slow: 0.7,
  hero: 1.1,
};

export const venice = {
  hoverMs: 220,
  dissolveMs: 80,
  staggerMs: 80,
  press: 0.97,
  stillHover: 1.12,
} as const;

export const hoverSpring = {
  duration: duration.hover,
  ease: easeEnter,
} as const;

export const dissolve = {
  duration: duration.dissolve,
  ease: easeStandard,
} as const;
