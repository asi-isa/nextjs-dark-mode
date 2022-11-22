// Theme constants and types

export const THEMES = {
  light: {
    "--color": "black",
    "--color-muted": "gray",
    "--color-accent": "blue",
    "--background": "white",
  },
  dark: {
    "--color": "white",
    "--color-muted": "gray",
    "--color-accent": "orange",
    "--background": "black",
  },
};

export type ThemeType = keyof typeof THEMES;

export const DEFAULT_THEME: ThemeType = "light";
