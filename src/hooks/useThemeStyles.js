import { useTheme } from '../context/Theme';

export function useThemedStyles(styles) {
    const theme = useTheme();

    return {
        styles    : styles ? styles(theme) : {},
        colors    : theme.colors,
        constants : theme.constants
    };
}
