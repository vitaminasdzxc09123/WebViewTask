import { StyleSheet } from 'react-native';

export default function styles({}) {
    return (
        StyleSheet.create({
            loaderContainer : {
                justifyContent : 'center',
                alignItems     : 'center',
                position       : 'absolute',
                height         : '100%',
                width          : '100%'
            }
        })
    );
}
