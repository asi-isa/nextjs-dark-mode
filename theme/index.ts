import { ThemeType, THEMES, DEFAULT_THEME } from "./ThemeSettings";

function getInitialColorTheme(defaultTheme: ThemeType): ThemeType {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  if (persistedColorPreference) {
    return persistedColorPreference as ThemeType;
  }

  const hasDarkMediaQueryPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkMediaQueryPreference) {
    return "dark";
  }

  return defaultTheme;
}

function setTheme(colors: typeof THEMES, theme: ThemeType) {
  const root = window.document.documentElement;

  for (const [key, color] of Object.entries(colors[theme])) {
    root.style.setProperty(key, color);
  }

  window.localStorage.setItem("color-mode", theme);
}

export const getCurrentTheme = () => {
  return window.localStorage.getItem("color-mode") as ThemeType;
};

const getNextTheme = () => {
  return getCurrentTheme() === "light" ? "dark" : "light";
};

export const switchTheme = () => {
  const nextTheme = getNextTheme();

  setTheme(THEMES, nextTheme);
};

// main script
function setInitialTheme(defaultTheme: ThemeType, colors: typeof THEMES) {
  const initialTheme = getInitialColorTheme(defaultTheme);

  setTheme(colors, initialTheme);
}

const setInitialThemeScript = `
  // 'import' functions
  ${getInitialColorTheme}
  ${setTheme}
  ${setInitialTheme}

  
  // 'execute' main script on client side
  setInitialTheme("${DEFAULT_THEME}", ${JSON.stringify(THEMES)});
`;

export default setInitialThemeScript;
