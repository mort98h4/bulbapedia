/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "types": {
          "normal-primary": "rgba(168, 168, 120, 1)",
          "normal-secondary": "rgba(109, 109, 78, 1)",
          "fire-primary": "rgba(240, 128, 48, 1)",
          "fire-secondary": "rgba(156, 83, 31, 1)",
          "fighting-primary": "rgba(192, 48, 40, 1)",
          "fighting-secondary": "rgba(125, 31, 26, 1)",
          "water-primary": "rgba(104, 144, 240, 1)",
          "water-secondary": "rgba(157, 183, 245, 1)",
          "flying-primary": "rgba(168, 144, 240, 1)",
          "flying-secondary": "rgba(109, 94, 156, 1)",
          "grass-primary": "rgba(120, 200, 80, 1)",
          "grass-secondary": "rgba(78, 130, 52, 1)",
          "poison-primary": "rgba(160, 64, 160, 1)",
          "poison-secondary": "rgba(104, 42, 104, 1)",
          "electric-primary": "rgba(248, 208, 48, 1)",
          "electric-secondary": "rgba(161, 135, 31, 1)",
          "ground-primary": "rgba(224, 192, 104, 1)",
          "ground-secondary": "rgba(146, 125, 68, 1)",
          "psychic-primary": "rgba(248, 88, 136, 1)",
          "psychic-secondary": "rgba(161, 57, 89, 1)",
          "rock-primary": "rgba(184, 160, 56, 1)",
          "rock-secondary": "rgba(120, 104, 36, 1)",
          "ice-primary": "rgba(152, 216, 216, 1)",
          "ice-secondary": "rgba(99, 141, 141, 1)",
          "bug-primary": "rgba(168, 184, 32, 1)",
          "bug-secondary": "rgba(109, 120, 21, 1)",
          "dragon-primary": "rgba(112, 56, 248, 1)",
          "dragon-secondary": "rgba(73, 36, 161, 1)",
          "ghost-primary": "rgba(112, 88, 152, 1)",
          "ghost-secondary": "rgba(73, 57, 99, 1)",
          "dark-primary": "rgba(112, 88, 72, 1)",
          "dark-secondary": "rgba(73, 57, 47, 1)",
          "steel-primary": "rgba(184, 184, 208, 1)",
          "steel-secondary": "rgba(120, 120, 135, 1)",
          "fairy-primary": "rgba(238, 153, 172, 1)",
          "fairy-secondary": "rgba(155, 100, 112, 1)",
          "%3F%3F%3F-primary": "rgba(104, 160, 144, 1)",
          "%3F%3F%3F-secondary": "rgba(68, 104, 94, 1)",
        },
      },
    }
  },
  safelist: [
    'bg-types-fire-primary',
    'border-types-fire-secondary',
    'bg-types-normal-primary',
    'border-types-normal-secondary',
    'bg-types-fighting-primary',
    'border-types-fighting-secondary',
    'bg-types-water-primary',
    'border-types-water-secondary',
    'bg-types-flying-primary',
    'border-types-flying-secondary',
    'bg-types-grass-primary',
    'border-types-grass-secondary',
    'bg-types-poison-primary',
    'border-types-poison-secondary',
    'bg-types-electric-primary',
    'border-types-electric-secondary',
    'bg-types-ground-primary',
    'border-types-ground-secondary',
    'bg-types-psychic-primary',
    'border-types-psychic-secondary',
    'bg-types-rock-primary',
    'border-types-rock-secondary',
    'bg-types-ice-primary',
    'border-types-ice-secondary',
    'bg-types-bug-primary',
    'border-types-bug-secondary',
    'bg-types-dragon-primary',
    'border-types-dragon-secondary',
    'bg-types-ghost-primary',
    'border-types-ghost-secondary',
    'bg-types-dark-primary',
    'border-types-dark-secondary',
    'bg-types-steel-primary',
    'border-types-steel-secondary',
    'bg-types-fairy-primary',
    'border-types-fairy-secondary',
    'bg-types-%3F%3F%3F-primary',
    'border-types-%3F%3F%3F-secondary',
  ],
  plugins: [],
}
