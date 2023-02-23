import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
}                             from 'react';
import {
     View, 
     Linking, 
     Platform
}                             from 'react-native';
import { WebView }            from 'react-native-webview';
import { 
    useDispatch, 
    useSelector 
}                             from 'react-redux';
import PropTypes              from 'prop-types';

import { updateWebSitesList } from '../../store/actions/WebSites';
import { 
    updatedSitesSelector,
    webSitesSelector 
}                             from '../../store/selector/WebSites';

import { useThemedStyles }    from '../../hooks/useThemeStyles';
import ScreenWrapper          from '../../components/ui/ScreenWrapper';
import Loader                 from '../../components/base/Loader';

import Footer                 from './ui/Footer';
import Styles                 from './styles';

const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(document.documentElement.innerHTML);
})();`;

function WebViewScreen({ route, navigation }) {
    const { styles } = useThemedStyles(Styles);

    const { item , index } = route?.params?.item;

    const dispatch = useDispatch();

    const webViewRef = useRef();

    const detailedWebSitesList = useSelector(updatedSitesSelector)

    const [ htmlData, setHtmlData ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const checkIsWebSite = useMemo(() => {
        return detailedWebSitesList.some(( item ) => item.id === index)
    },[ detailedWebSitesList ])

    useEffect(() => {
        if( !checkIsWebSite && htmlData ) {
            dispatch( updateWebSitesList ({
               id        : index,
               name      : item.name,
               url       : item.url,
               copyright : htmlData?.split('©').pop().split('.')[0]
        }))
    }
    },[ htmlData , checkIsWebSite ])
    
    const goBack = useCallback(() => {
        setIsLoading(true)

        setTimeout( () => {
            setIsLoading(false)
            navigation.goBack();
        }, 3000 );
    }, [ webViewRef ]);

    const loader = useCallback(() => {
        return (
            <View style = {styles.loaderContainer}>
                <Loader />
            </View>
        );
    }, []);

    return (
        <ScreenWrapper
            useBottomInset = {false}
            useScroll      = {false}
            useHeader      = {false}
        >
        { isLoading ? 
            <View style = {styles.loaderContainer}>
                <Loader />
            </View>
             :
              <>
            <WebView
                javaScriptEnabled  = {true}
                renderLoading      = {loader}
                injectedJavaScript = {INJECTED_JAVASCRIPT}
                onMessage          = {( event ) => setHtmlData(event.nativeEvent.data)}              
                source             = {{ uri : item?.url }}
                ref                = {webViewRef}
                startInLoadingState
            />
                <Footer goBack = {goBack}/> 
             </>
            }
        </ScreenWrapper>
    );
}

WebViewScreen.propTypes = {
    route      : PropTypes.object.isRequired,
    navigation : PropTypes.object.isRequired
};

export default React.memo(WebViewScreen);
