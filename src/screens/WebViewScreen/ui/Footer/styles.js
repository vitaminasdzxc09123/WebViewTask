import { StyleSheet } from 'react-native';

export default function styles({ colors }) {
    return (
        StyleSheet.create({
            container : {
                backgroundColor   : colors.WEBVIEW_PANEL_BG,
                flexDirection     : 'row',
                alignItems        : 'center',
                justifyContent    : 'center',
                paddingHorizontal : 32,
                paddingTop        : 11
            },
            disabled : {
                opacity : 0.5
            },
            containerScan: {
                borderRadius    : 16,
                backgroundColor : colors.ACCENT_BLUE,
                padding         : 12
            },
            titleButton: {
                color: colors.WHITE
            }
        })
    );
}
