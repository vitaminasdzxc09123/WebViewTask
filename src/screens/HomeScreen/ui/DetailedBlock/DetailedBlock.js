import React               from 'react';
import PropTypes           from 'prop-types';
import { Text, View }      from 'react-native';
import { useSelector }     from 'react-redux';

import Loader              from '../../../../components/base/Loader';
import { useThemedStyles } from '../../../../hooks/useThemeStyles';
import AnimatedPress       from '../../../../components/base/AnimatedPress';

import Styles              from './styles';

const text = {
    headerTitle : {
        name        : 'Name',
        description : 'Copyright information'
    }
}

function DetailedBlock({data, containerStyle, onPress }) {
    const { styles, colors } = useThemedStyles(Styles);
    const { item } = data || {}

    return (
        <View style = {[ styles.container, containerStyle ]}>
          <View style = {styles.headerContent}>
             <Text>
               {text.headerTitle.name}
               </Text>
             <Text>
                {text.headerTitle.description}
               </Text>
          </View>
        <View
           key   = { data?.index || item?.id }
           style = {[ styles.content ]}>
          <Text>
             {item?.name}
          </Text>
         {
           Boolean(item?.copyright) && 
              <Text>
                 {item?.copyright}
              </Text>
         }
        </View>
    </View>
    );
}

DetailedBlock.propTypes = {
    containerStyle : PropTypes.object
};

DetailedBlock.defaultProps = {
    containerStyle : {},
};

export default React.memo(DetailedBlock);
