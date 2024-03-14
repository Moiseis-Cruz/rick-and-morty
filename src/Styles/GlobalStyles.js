import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Exo', sans-serif;
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
