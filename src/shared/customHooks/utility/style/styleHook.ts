import lightStyle from "./themes/lightTheme.module.scss";
import darkStyle from "./themes/darkTheme.module.scss";

const lightTheme: Style = {
    primary: lightStyle.primary,
    accent: lightStyle.accent,
    tertiary: lightStyle.tertiary,
    warn: lightStyle.warn,
    hover: lightStyle.hover,
    popup: lightStyle.popup,
};

const darkTheme: Style = {
    primary: darkStyle.primary,
    accent: darkStyle.accent,
    tertiary: darkStyle.tertiary,
    warn: darkStyle.warn,
    hover: darkStyle.hover,
    popup: darkStyle.popup,
};

export default function useStyle(styleType: string = 'dark'): Style {
    switch (styleType.toLowerCase()) {
        case "light":
            return lightTheme;
        case "dark":
            document.body.style.backgroundColor = "#313131";
            return darkTheme;
        default:
            return darkTheme;
    }
}

export interface Style {
    primary: CSSModuleClasses[string];
    accent: CSSModuleClasses[string];
    tertiary: CSSModuleClasses[string];
    warn: CSSModuleClasses[string];
    hover: CSSModuleClasses[string];
    popup: CSSModuleClasses[string];
}