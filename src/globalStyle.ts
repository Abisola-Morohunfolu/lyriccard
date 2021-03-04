import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        box-sizing: inherit;
        font-family: 'Syne', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.3s ease-out;
    }

`;
