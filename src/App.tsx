import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '@src/pages/MainScreen';
import { theme } from './components/styles/theme.ts';
import GlobalStyle from './components/styles/GlobalStyles.tsx';

function App(): React.JSX.Element {
    return (
        // react routing
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="*" element={<MainScreen />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
