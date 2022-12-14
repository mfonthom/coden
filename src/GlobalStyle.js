import { createGlobalStyle } from "styled-components";
import Satoshi from "./assets/fonts/Satoshi-Variable.ttf";
import Studio from "./assets/fonts/StudioFeixenSansTRIAL-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'satoshi';
        src: url(${Satoshi});
    }

    @font-face {
        font-family: 'studio';
        src: url(${Studio});
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'satoshi' !important;
        background: #fff;
        color: #575757;
    }
    h1{
        font-family: 'studio';
    }

    a{
        text-decoration: none;
    }
`;
