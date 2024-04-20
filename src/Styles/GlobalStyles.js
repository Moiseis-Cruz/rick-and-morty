import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: #000000;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont,'Exo', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        width: 100%;
        height: 100%;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;