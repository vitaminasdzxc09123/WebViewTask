import React                 from 'react';
import { View, Text }        from 'react-native';
import PropTypes             from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AnimatedPress         from '../../../../components/base/AnimatedPress';
import { useThemedStyles }   from '../../../../hooks/useThemeStyles';

import Styles                from './styles';

const text = {
    buttonScan: 'Scan information'
}

function Footer({ goBack }) {
    const { styles, colors } = useThemedStyles(Styles);
    
    const insets = useSafeAreaInsets();

    return (
        <View style = {[ styles.container, { paddingBottom : insets.bottom } ]}>
            <AnimatedPress
                 style   = {styles.containerScan}
                 onPress = {goBack}>
               <Text style = {styles.titleButton}>
                  {text.buttonScan}
               </Text>
            </AnimatedPress>
        </View>
    );
}

Footer.propTypes = {
    goBack : PropTypes.func.isRequired
};

export default React.memo(Footer);
