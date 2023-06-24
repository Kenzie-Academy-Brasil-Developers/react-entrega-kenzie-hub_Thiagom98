import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
        background-color: transparent ;
        border: none;
    }
    a{
        text-decoration: none ;
    }
    ul, ol{
        list-style: none;
    }
    body , #root{
        height: 100vh;
        max-width: 4000px;
    }
`