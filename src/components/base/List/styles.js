import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                flex : 1
            },
            textNegativeData : {
                marginTop  : 30,
                textAlign  : 'center',
                alignSelf  : 'center',
                color      : colors.ACCENT_BLUE,
                fontSize   : fonts.font14,
                lineHeight : fonts.font27,
                ...fonts.semi
            }
        })
    );
}
