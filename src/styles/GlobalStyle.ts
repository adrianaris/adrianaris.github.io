import { createGlobalStyle } from "styled-components";

import ArvoRegular from "@fonts/Arvo-Regular.ttf";
import ArvoItalic from "@fonts/Arvo-Italic.ttf";
import ArvoBold from "@fonts/Arvo-Bold.ttf";
import ArvoBoldItalic from "@fonts/Arvo-BoldItalic.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Arvo';
        src: url(${ArvoRegular}) format('truetype'),
             url(${ArvoItalic}) format('truetype'),
             url(${ArvoBold}) format('truetype'),
             url(${ArvoBoldItalic}) format('truetype')
    }
`;

export default GlobalStyle;
