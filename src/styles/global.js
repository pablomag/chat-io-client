import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: #121110;
}

h1 {
    font-size: 2rem;
    font-weight: 400;
}

h2 {
    font-size: 1.8rem;
    font-weight: 300;
}

h3 {
    font-size: 1.5rem;
    font-weight: 300;
}

h4 {
    font-size: 1.3rem;
    font-weight: 300;
}

h5 {
    font-size: 1.1rem;
    font-weight: 300;
}

li {
    font-size: 1rem;
    font-weight: 300;
}

p {
    font-size: 1rem;
    font-weight: 300;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: #ccc;
}

a:active {
    color: #333;
}

button {
    font-weight: 700;
    font-size: 1.6rem;
    transition: all 150ms ease;
}

.App {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.uppercase {
    text-transform: uppercase;
}

.font-400 {
    font-weight: 400;
}

.font-700 {
    font-weight: 700;
}

`;
