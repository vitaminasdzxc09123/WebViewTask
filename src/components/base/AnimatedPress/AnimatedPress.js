import React, {
    useCallback,
    useRef
}                              from 'react';
import PropTypes               from 'prop-types';
import { Pressable, Animated } from 'react-native';

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

function AnimatedPress({
    duration,
    disabled,
    children,
    scale,
    withoutAnimation,
    style,
    containerStyle,
    ...props
}) {
    const animScale = useRef(new Animated.Value(1)).current;

    const pressIn = useCallback(() => {
        if (withoutAnimation) return;
        Animated.timing(animScale, {
            useNativeDriver : true,
            toValue         : scale,
            duration
        }).start();
    }, []);

    const pressOut = useCallback(() => {
        if (withoutAnimation) return;
        Animated.timing(animScale, {
            useNativeDriver : true,
            toValue         : 1,
            duration
        }).start();
    }, []);


    return (
        <Pressable
            {...props}
            disabled   = {disabled}
            style      = {[ containerStyle ]}
            onPressIn  = {pressIn}
            onPressOut = {pressOut}
        >
            <Animated.View
                style = {[
                    style,
                    { transform : [ { scale : animScale } ] }
                ]}
            >
                {children}
            </Animated.View>
        </Pressable>
    );
}

AnimatedPress.propTypes = {
    disabled         : PropTypes.bool,
    onPress          : PropTypes.func,
    children         : PropTypes.node.isRequired,
    duration         : PropTypes.number,
    withoutAnimation : PropTypes.bool,
    scale            : PropTypes.number,
    style            : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    containerStyle : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

AnimatedPress.defaultProps = {
    disabled         : false,
    style            : {},
    onPress          : undefined,
    containerStyle   : {},
    duration         : PRESS_DURATION,
    scale            : DEFAULT_SCALE,
    withoutAnimation : false
};

export default React.memo(AnimatedPress);
