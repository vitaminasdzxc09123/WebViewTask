import React            from 'react';
import PropTypes        from 'prop-types';

import {
    colors,
    fonts
}                       from '../../theme';
import { ThemeContext } from './ThemeContext';


export function ThemeProvider({ children }) {
    const context = {
        colors,
        fonts
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children : PropTypes.oneOfType([ PropTypes.array, PropTypes.object ])
};

ThemeProvider.defaultProps = {
    children : null
};
