// see: 'https://tailwindcss.com/docs/dark-mode'

export type Theme = "light" | "dark";
type StoreTheme = "system" | Theme;

const STORAGE_KEY = "theme";

const loadTheme = () => localStorage.getItem(STORAGE_KEY);
const saveTheme = (theme: StoreTheme) => localStorage.setItem(STORAGE_KEY, theme);

export const getTheme = (): Theme => {
  const loaded = loadTheme();

  switch (loaded) {
    case "system":
      break;

    case "light":
    case "dark":
      return loaded;

    default:
      saveTheme("system");
      break;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
};

export const setTheme = saveTheme;

export const switchtheme = () => {
  switch (getTheme()) {
    case "light":
      setTheme("dark");
      break;

    case "dark":
      setTheme("light");
      break;
  }
};