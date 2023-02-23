import * as React from 'react';
import Svg, { Circle, ClipPath, Rect, LinearGradient, Stop } from 'react-native-svg';
import PropTypes     from 'prop-types';

const SIZE = 100; // 100px x 100px
const STROKE_WIDTH = 10;

function Icon({ size, strokeWidth, ...props }) {
    const height = size - strokeWidth;
    const width  = size - strokeWidth;

    return (
        <Svg
            width  = {width}
            height = {height}
            {...props}
        >
            <ClipPath id='top-half-circle'>
                <Rect
                    x      = '0'
                    y      = '0'
                    width  = {width}
                    height = {height / 2}
                />
            </ClipPath>
            <ClipPath id='bottom-half-circle'>
                <Rect
                    x      = '0'
                    y      = {height / 2}
                    width  = {width}
                    height = {height / 2}
                />
            </ClipPath>

            <Circle
                cx          = {width / 2}
                cy          = {height / 2}
                r           = {size / 2 - strokeWidth}
                strokeWidth = {strokeWidth}
                stroke      = 'url(#top-gradient)'
                clipPath    = 'url(#top-half-circle)'
            />
            <Circle
                cx          = {width / 2}
                cy          = {height / 2}
                r           = {size / 2 - strokeWidth}
                strokeWidth = {strokeWidth}
                stroke      = 'url(#bottom-gradient)'
                clipPath    = 'url(#bottom-half-circle)'
            />

            <LinearGradient id='top-gradient'>
                <Stop offset={0} stopColor={props.color} stopOpacity={0} />
                <Stop offset={0.9} stopColor={props.color} stopOpacity={0.5} />
                <Stop offset={1} stopColor={props.color} stopOpacity={0.5} />
            </LinearGradient>

            <LinearGradient
                id='bottom-gradient'
            >
                <Stop offset={0} stopColor={props.color} stopOpacity={1} />
                <Stop offset={0.9} stopColor={props.color} stopOpacity={0.5} />
                <Stop offset={1} stopColor={props.color} stopOpacity={0.5} />
            </LinearGradient>
        </Svg>
    );
}

Icon.propTypes = {
    size        : PropTypes.number,
    strokeWidth : PropTypes.number,
    color       : PropTypes.string
};

Icon.defaultProps = {
    size        : SIZE,
    strokeWidth : STROKE_WIDTH,
    color       : '#000000'
};

export default Icon;
