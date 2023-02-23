import React               from 'react';
import PropTypes           from 'prop-types';
import { Text, View }      from 'react-native';
import { useSelector }     from 'react-redux';

import Loader              from '../../base/Loader';
import { useThemedStyles } from '../../../hooks/useThemeStyles';
import AnimatedPress       from '../../base/AnimatedPress/AnimatedPress';

import Styles              from './styles';

const text = {
    buttonText : 'Check Copyright information'
}

function ListBlock({data, containerStyle, onPress, description }) {
    const { styles, colors } = useThemedStyles(Styles);
    const { item } = data || {}

    return (
        <View
           key   = { data?.index || item?.id }
           style = {[ styles.container, containerStyle ]}>
          <Text>
             {item?.name}
          </Text>
          <AnimatedPress 
               onPress = {onPress}
               style   = {styles.containerButton}>
            <Text>
               {text?.buttonText}
            </Text>
          </AnimatedPress>
         {
           Boolean(item?.copyright) && description &&
              <Text>
                 {item?.copyright}
              </Text>
         }
        </View>
    );
}

ListBlock.propTypes = {
    containerStyle : PropTypes.object
};

ListBlock.defaultProps = {
    containerStyle : {},
};

export default React.memo(ListBlock);
