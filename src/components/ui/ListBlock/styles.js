import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
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
            containerButton: {
                borderWidth  : 1,
                padding      : 8,
                borderRadius : 12,
                borderColor: colors?.ACCENT
            },
            title : {
                fontSize   : fonts?.font14,
                lineHeight : fonts?.font20,
                ...fonts?.regular
            },
        })
    );
}
