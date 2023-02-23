import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    useMemo
}                          from 'react';
import PropTypes           from 'prop-types';
import {
    View,
    Text,
    Pressable,
    Animated
}                          from 'react-native';

import { useThemedStyles } from '../../../hooks/useThemeStyles';

import { colors }          from '../../../theme';
import Styles              from './styles';

const ANIMATION_DURATION = 200;
const padding = 5;

function TabSwitcher({
    tabs,
    onChange,
    initialTab,
    style,
    containerStyle,
    tabOverlay,
    disabled,
    activeTabText,
    active
}) {
    const { styles } = useThemedStyles(Styles);

    const [ containerWidth, setContainerWidth ] = useState(0);
    const [ activeTab, setActiveTab ]           = useState(initialTab);

    const translation = useRef(new Animated.Value(0)).current;

    const tabWidth = useMemo(() => {
        return containerWidth / tabs.length;
    }, [ containerWidth, tabs ]);

    useEffect(() => {
        Animated.timing(translation, {
            useNativeDriver : true,
            toValue         : initialTab,
            duration        : 0
        }).start();
    }, []);

    useEffect(() => {
        onChange({ ...tabs[activeTab], index : activeTab });
    }, [ activeTab ]);

    const handleLayoutReady = useCallback((e) => {
        setContainerWidth(e.nativeEvent.layout.width);
    }, []);

    function handlePressTab(idx) {
        if (!active) return;
        setActiveTab(idx);
        moveOn(idx);
    }

    function moveOn(idx) {
        Animated.timing(translation, {
            useNativeDriver : true,
            toValue         : idx,
            duration        : ANIMATION_DURATION
        }).start();
    }

    return (
        <View style = {[ styles.wrapper, style ]}>
            <View onLayout = {handleLayoutReady} style = {styles.blockWidth} />
            <View
                style = {[
                    { width : containerWidth, padding },
                    styles.container,
                    containerStyle
                ]}
            >
                <View style = {styles.tabContainer} >
                    {tabs?.map((tab, idx) => {
                        const isActive = idx === activeTab;
                        const textColor = isActive ? colors.WHITE : null;

                        return (
                            <Pressable
                                disabled = {disabled}
                                key      = {tab.id}
                                onPress  = {handlePressTab.bind(null, idx)}
                                style    = {[
                                    styles.tab,
                                    isActive && styles.activeTab
                                ]}
                            >
                                <Text style={[ styles.tabText, isActive && (activeTabText ?? {}), { color : textColor } ]}>
                                    {tab.title}
                                </Text>
                            </Pressable>
                        );
                    })}
                    <Animated.View
                        style = {[ (tabOverlay ?? styles.tabOverlay), {
                            width     : tabWidth,
                            transform : [ {
                                translateX : translation.interpolate({
                                    inputRange  : [ 0, tabs.length - 1 ],
                                    outputRange : [ 0, (containerWidth - tabWidth) - padding * 2 ]
                                })
                            } ]
                        } ]}
                    />
                </View>
            </View>
        </View>
    );
}

TabSwitcher.propTypes = {
    disabled       : PropTypes.bool,
    tabs           : PropTypes.array.isRequired,
    initialTab     : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange       : PropTypes.func.isRequired,
    style          : PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
    containerStyle : PropTypes.object,
    tabOverlay     : PropTypes.object,
    activeTabText  : PropTypes.object,
    active         : PropTypes.bool
};

TabSwitcher.defaultProps = {
    disabled       : false,
    initialTab     : 0,
    style          : {},
    containerStyle : {},
    tabOverlay     : null,
    activeTabText  : null,
    active         : true
};

export default React.memo(TabSwitcher);
