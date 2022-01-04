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
        --color-lightmode-border: #d4d5d9;
        --color-lightmode-header-text: #303030;
        --color-universal-header-text-animation: #ff3068;
    }
    
`;