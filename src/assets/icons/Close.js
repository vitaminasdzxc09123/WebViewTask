import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';


function Icon(props) {
    return (
        <Svg
            width={10}
            height={11}
            fill='none'
            {...props}
        >
            <Path fill={props.color} d='M.357 8.621 8.135.843 9.55 2.257l-7.778 7.779z' />
            <Path fill={props.color} d='M9.55 8.621 1.772.843.357 2.257l7.779 7.779z' />
        </Svg>
    );
}

Icon.propTypes = {
    color : PropTypes.string
};

Icon.defaultProps = {
    color : '#fff'
};

export default Icon;
