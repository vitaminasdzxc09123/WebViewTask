import React, {
     useCallback,
      useEffect,
      useState
}                           from 'react';
import { Text }             from 'react-native';
import PropTypes            from 'prop-types';
import { 
    useDispatch, 
    useSelector 
}                           from 'react-redux';
import { WebView }          from 'react-native-webview';

import { 
     updatedSitesSelector,
     webSitesSelector
}                           from '../../store/selector/WebSites';
import { getWebSitesList }  from '../../store/actions/WebSites';
import { useThemedStyles }  from '../../hooks/useThemeStyles';

import ScreenWrapper        from '../../components/ui/ScreenWrapper';
import List                 from '../../components/base/List';
import TabSwitcher          from '../../components/ui/TabSwitcher';
import ListBlock            from '../../components/ui/ListBlock';

import ROUTES               from '../../constants/Routes';

import DetailedBlock        from './ui/DetailedBlock';

import { TABS_DATA }        from './config';
import Styles               from './styles';

const text = {
    headerTitle : 'Home Screen'
};

function HomeScreen({ navigation }) {
    const { styles } = useThemedStyles(Styles);

    const dispatch = useDispatch();

    const detailedWebSitesList = useSelector(updatedSitesSelector)
    const webSitesList         = useSelector(webSitesSelector)

    const [ typeList, setTypeList ] = useState(TABS_DATA[0]);

    useEffect(() => {
        dispatch(getWebSitesList())
    },[])

    const handleOpenWebView = useCallback((item) => {
        navigation.navigate(ROUTES.WEB_VIEW_SCREEN, { item });
    },[])

    const onChange = useCallback((item) => {
        setTypeList(item);
    }, []);

    const renderItem = useCallback((item) => {
        return (
            <ListBlock
                onPress = {() => handleOpenWebView(item)}
                data    = {item}
            />
        );
    }, [ webSitesList ]);

    const renderDetaildItem = useCallback((item) => {
        return (
            <DetailedBlock data = {item}/>
        );
    }, [ webSitesList ]);

    const keyExtractor = useCallback((item) => item?.url, []);

    const renderTypeList = useCallback(() => {
        return (
            <>
            {typeList.id === 1 ?
               <List
                 list         = {webSitesList}
                 keyExtractor = {keyExtractor}
                 renderItem   = {renderItem}
               />
                : 
               <List
                 list         = {detailedWebSitesList}
                 keyExtractor = {keyExtractor}
                 renderItem   = {renderDetaildItem}
                />
            }
        </>
        );
    }, [ webSitesList , typeList ]);

    return (
        <ScreenWrapper
            useBottomInset
            useScroll      = {false}
            headerTitle    = {text.headerTitle}
            containerStyle = {styles.container}
        >
           <TabSwitcher
                onChange       = {onChange}
                tabs           = {TABS_DATA}
            />
           {renderTypeList()}
        </ScreenWrapper>
    );
}

HomeScreen.propTypes = {
    navigation : PropTypes.object.isRequired
};

export default React.memo(HomeScreen);
