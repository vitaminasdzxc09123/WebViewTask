import React, { useEffect, useRef } from 'react';
import { Animated, Easing }         from 'react-native';
import PropTypes                    from 'prop-types';

import { useThemedStyles }          from '../../../hooks/useThemeStyles';

import LoaderIcon                   from '../../../assets/icons/loader/LoaderIcon';

import Styles                       from './styles';

const LOADERS = {
    'small'   : { size : 18, strokeWidth : 3 },
    'medium'  : { size : 35, strokeWidth : 4 },
    'default' : { size : 55, strokeWidth : 8 },
    'large'   : { size : 100, strokeWidth : 12 }
};

function Loader({ size, style, color }) {
    const { colors, styles } = useThemedStyles(Styles);
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(Animated.timing(
            rotateAnim,
            {
                toValue         : 1,
                duration        : 1000,
                easing          : Easing.linear,
                useNativeDriver : true
            }
        )).start();
    }, []);

    const sizeProps = LOADERS[size] || LOADERS.default;

    const interpolateRotating = rotateAnim.interpolate({
        inputRange  : [ 0, 1 ],
        outputRange : [ '0deg', '360deg' ]
    });
    const transformStyles = {
        transform : [ { rotate : interpolateRotating } ]
    };

    return (
        <Animated.View
            style = {[
                styles.container,
                style,
                transformStyles
            ]}
        >
            <LoaderIcon
                color = {color || colors.ACCENT}
                {...sizeProps}
            />
        </Animated.View>

    );
}

Loader.propTypes = {
    size  : PropTypes.string,
    color : PropTypes.string,
    style : PropTypes.object
};

Loader.defaultProps = {
    size  : 'default',
    color : '',
    style : {}
};

export default React.memo(Loader);
