import React, {
    useCallback,
    useMemo
}                                  from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    Text
}                                  from 'react-native';
import { useSelector }             from 'react-redux';
import { useSafeAreaInsets }       from 'react-native-safe-area-context';
import PropTypes                   from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation }           from '@react-navigation/native';

import { useThemedStyles }         from '../../../hooks/useThemeStyles';

import AnimatedPress               from '../../base/AnimatedPress';

import ROUTES                      from '../../../constants/Routes';

import Styles                      from './styles';

const DEFAULT_INSET = 20;
const DEFAULT_BOTTOM_INSET = 40;

function ScreenWrapper({
    children,
    useTopInset,
    handleHeader,
    isGoBack,
    keyboardContainerStyle,
    useScroll,
    useBottomInset,
    containerStyle,
    useAvoidingView,
    headerTitle,
    useHeader,
    keyboardVerticalOffset
}) {
    const { styles } = useThemedStyles(Styles);

    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    const topInset    = insets.top || DEFAULT_INSET;
    const bottomInset = (insets.bottom * 2) || DEFAULT_BOTTOM_INSET;

    const topInsetStyle    = { paddingTop : useTopInset ? topInset : DEFAULT_INSET };
    const bottomInsetStyle = { marginBottom : useBottomInset  ? bottomInset : 0 };

    const handleGoBack = useCallback(() => {
        navigation?.goBack();
    }, []);

    const renderView = useCallback(() => (
        <View
            style = {[
                styles.container,
                topInsetStyle,
                bottomInsetStyle,
                containerStyle
            ]}
        >
            {children}
        </View>
    ));

    const renderScrollView = useCallback(() => (
        <KeyboardAwareScrollView
            enableResetScrollToCoords    = {false}
            showsVerticalScrollIndicator = {false}
        >
            {renderView()}
        </KeyboardAwareScrollView>
    ));

    const renderHeader = useCallback(() => {
        return (
            <View style = {[ styles.headerContainer, { paddingTop : topInset } ]} >
                <AnimatedPress
                    onPress = {Boolean(handleHeader) ? handleHeader : handleGoBack}
                    style   = {styles.leftContent}
                >
                    <Text style = { styles.titleHeader }>
                        {headerTitle}
                    </Text>
                </AnimatedPress>
            </View>
        );
    }, [ handleHeader ]);

    return (
        <KeyboardAvoidingView
            enabled                = {useAvoidingView}
            behavior               = {Platform.OS === 'ios' ? 'padding' : 'height'}
            style                  = {[ styles.keyboardContainer, keyboardContainerStyle ]}
            keyboardVerticalOffset = {keyboardVerticalOffset}
        >
            <View style = {styles.block}>
                {Boolean(useHeader) && renderHeader()}
                {Boolean(useScroll) ? renderScrollView() : renderView()}
            </View>
         </KeyboardAvoidingView>
    );
}

ScreenWrapper.propTypes = {
    keyboardContainerStyle : PropTypes.object,
    isGoBack               : PropTypes.bool,
    handleHeader           : PropTypes.func,
    useHeader              : PropTypes.bool,
    headerTitle            : PropTypes.string,
    containerStyle         : PropTypes.object,
    children               : PropTypes.node.isRequired,
    useTopInset            : PropTypes.bool,
    useBottomInset         : PropTypes.bool,
    useScroll              : PropTypes.bool,
    useAvoidingView        : PropTypes.bool,
    keyboardVerticalOffset : PropTypes.number,
};

ScreenWrapper.defaultProps = {
    keyboardContainerStyle : {},
    isGoBack               : true,
    handleHeader           : null,
    tabBarOptions          : {},
    headerTitle            : '',
    useHeader              : true,
    useTopInset            : false,
    useBottomInset         : false,
    useScroll              : true,
    useAvoidingView        : false,
    containerStyle         : {},
    keyboardVerticalOffset : 0,
};

export default React.memo(ScreenWrapper);
