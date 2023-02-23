import React, { useCallback }   from 'react';
import PropTypes                from 'prop-types';
import { FlatList, View, Text } from 'react-native';

import { useThemedStyles }      from '../../../hooks/useThemeStyles';
import Styles                   from './styles';

function List({
    style,
    renderItem,
    keyExtractor,
    emptyStateText,
    list
}) {
    const { styles } = useThemedStyles(Styles);

    if (!list || list.length === 0) return <Text style = {styles.textNegativeData}>{emptyStateText}</Text>;

    return (
        <View style = {[ styles.container, style ]}>
            <FlatList
                initialNumToRender           = {10}
                renderItem                   = {renderItem}
                keyExtractor                 = {keyExtractor}
                data                         = {list}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

List.propTypes = {
    emptyStateText : PropTypes.string,
    renderItem     : PropTypes.func.isRequired,
    style          : PropTypes.object,
    list           : PropTypes.array
};

List.defaultProps = {
    emptyStateText : '',
    style          : {},
    list           : []
};

export default React.memo(List);
