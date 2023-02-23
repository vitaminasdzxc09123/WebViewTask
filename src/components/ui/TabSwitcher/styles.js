import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            wrapper : {
                alignItems : 'center'
            },
            container : {
                borderRadius    : 30,
                height          : 50,
                backgroundColor : colors.ACCENT_LIGHT
            },
            tabContainer : {
                flex           : 1,
                width          : '100%',
                flexDirection  : 'row',
                justifyContent : 'space-between',
                alignItems     : 'center'
            },
            tab : {
                height         : '100%',
                flex           : 1,
                elevation      : 5,
                zIndex         : 5,
                flexDirection  : 'row',
                justifyContent : 'center',
                alignItems     : 'center',
                opacity        : 0.7
            },
            tabText : {
                fontSize   : fonts.font13,
                lineHeight : fonts.font20,
                color      : colors.WHITE,
                textAlign  : 'center',
                ...fonts.medium
            },
            activeTab : {
                opacity : 1
            },
            tabOverlay : {
                position        : 'absolute',
                height          : '100%',
                backgroundColor : colors.ACCENT,
                borderRadius    : 30,
                zIndex          : 1,
                elevation       : 1
            },
            blockWidth : {
                width : '100%'
            }
        })
    );
}
