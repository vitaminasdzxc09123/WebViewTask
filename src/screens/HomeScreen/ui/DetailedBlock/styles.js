import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container: {
                borderRadius : 12,
                borderColor  : colors?.ACCENT,
                borderWidth  : 1,
                marginTop    : 8
            },
            headerContent: {
                marginTop         : 12,
                paddingHorizontal : 16,
                flexDirection     : 'row',
                justifyContent    : 'space-between',
            },
            content : {
                flexDirection     : 'row',
                justifyContent    : 'space-between',
                alignItems        : 'center',
                marginTop         : 10,
                flex              : 1,
                paddingHorizontal : 16,
                paddingVertical   : 16,
                borderRadius      : 12,
                backgroundColor   : colors?.BACKGROUND_GRAY
            },
            title : {
                fontSize   : fonts?.font14,
                lineHeight : fonts?.font20,
                ...fonts?.regular
            },
        })
    );
}
