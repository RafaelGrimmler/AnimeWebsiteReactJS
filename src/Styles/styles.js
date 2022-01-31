import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body,  #root {
        height: 100%;
        font-family: 'Lato', sans-serif;
    }

    body {
        overflow-x: hidden;
    }
    
    ul {
        list-style: none;
    }
    #root {
        --color-text-white: #FDFDFD;

        --color-lightmode-background-white: #FDFDFD;
        --color-lightmode-border: #bebfc2;
        --color-lightmode-header-text: #303030;

        --color-nightmode-background-cyan: #202124;
        --color-nightmode-background-body-cyan: #363638;
        --color-nightmode-header-text: #cfd0d1;
        --color-nightmode-border: #000;

        --color-universal-header-text-animation: #ff3068;
    }
    
`;