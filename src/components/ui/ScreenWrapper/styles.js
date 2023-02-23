import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                flex : 1
            },
            keyboardContainer : {
                flex              : 1,
                paddingHorizontal : 16,
                backgroundColor   : colors?.WHITE
            },
            block : {
                position : 'relative',
                flex     : 1
            },
            bottomContainer : {
                flex           : 1,
                alignItems     : 'center',
                justifyContent : 'flex-end'
            },
            headerContainer : {
                alignItems     : 'center',
                justifyContent : 'space-between',
                flexDirection  : 'row'
            },
            titleHeader : {
                textAlign  : 'center',
                marginLeft : 13,
                fontSize   : fonts?.font24,
                color      : colors?.TEXT_SECOND,
                ...fonts?.bold
            },
        })
    );
}
