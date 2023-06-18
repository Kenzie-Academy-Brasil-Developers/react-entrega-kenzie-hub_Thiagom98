import { createGlobalStyle } from "styled-components";

export const  GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
        --font-primary:'Inter', sans-serif;

    }
    body{
        background-color: var(--color-grey-4);   
    }
`

