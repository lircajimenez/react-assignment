import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #efefef;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img,
picture {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

body {
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: var(--primary-color);
  color: black;
}

`;
