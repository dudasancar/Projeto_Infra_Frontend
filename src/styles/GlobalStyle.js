import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
}
body {
    padding: 0px;
    margin: 0px;
    font-size: 100%;
    background-color: #F7F7F7
}`;

export default GlobalStyle;
