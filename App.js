import React, { useEffect } from 'react';
import { LogBox }           from 'react-native';
import { Provider }         from 'react-redux';
import { ThemeProvider }    from './src/context/Theme/ThemeProvider';

import { Navigation }       from './src/navigation';
import { store }            from './src/store';

function App() {

    useEffect(() => {
        LogBox.ignoreAllLogs(true);
    }, []);

    return (
        <Provider store = {store}>
            <ThemeProvider>
                <Navigation />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
