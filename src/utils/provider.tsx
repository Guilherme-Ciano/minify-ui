import { useState } from "react";
import { Theme, darkThemeVariables, lightThemeVariables } from "./theme";

export const useTheme = () => {
	const [theme, setLocalTheme] = useState<Theme>(() => {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme ? (storedTheme as Theme) : "dark";
	});

	const setTheme = (theme: Theme) => {
		setLocalTheme(theme);
		localStorage.setItem("theme", theme);
	};

	const themeVariables =
		theme === "dark" ? darkThemeVariables : lightThemeVariables;

	return { theme, setTheme, themeVariables };
};
