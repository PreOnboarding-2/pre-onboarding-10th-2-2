import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  box-sizing:border-box
}
*,
:after,
:before {
  box-sizing: border-box;
  flex-shrink: 0;
}
:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-break: break-word;
  tab-size: 4;
}
html,
body {
  height: 100%;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
button {
  background: none;
  border: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  font: 400 62.5%/1.4 'Spoqa Han Sans Neo', sans-serif;
}
body {
  font-size:1.4rem;
  color: #152766;
  background: #f7f7f7;
}
ul{
   list-style:none;
   }
.page{
  padding-top: 200px;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction: column;
}
`;

export default GlobalStyles;
