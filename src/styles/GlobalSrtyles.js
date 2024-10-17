import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
      &, &.dark-mode{
        background-color: #191622;
        color: #fff;

        --color-dark-0:#0b0a0f;
        --color-dark-50:#221e2e;
        --color-dark-100:#39324d;
        --color-dark-200:#665a8b;
        --color-dark-300:#665a8b;
        --color-dark-400:#8074a5;
        --color-dark-500:#b8b2cd;
        --color-dark-600:#b8b2cd;
        --color-dark-700:#d5d1e1;
        --color-dark-800:#f1f0f5;


      }
      &.light-mode{
        background-color: #f5f5f5;
        color: #191641;
        
        --color-dark-800:#f1f0f5;
        --color-dark-700:#d5d1e1;
        --color-dark-600:#b8b2cd;
        --color-dark-500:#b8b2cd;
        --color-dark-400:#8074a5;
        --color-dark-300:#665a8b;
        --color-dark-200:#665a8b;
        --color-dark-100:#39324d;
        --color-dark-50:#221e2e;
        --color-dark-0:#0b0a0f;
      }
    }

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Exo 2", sans-serif;
  font-optical-sizing: auto;
  
  font-style: normal;
 
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.4rem;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
  `;
export default GlobalStyle;
