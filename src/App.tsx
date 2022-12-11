import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "~/theme";
import router from "~/Router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(//fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans&display=swap); 
* {font-family:'Inter', 'Noto Sans KR',Dotum,Helvetica,AppleGothic,Sans-serif !important; word-wrap:break-word; word-break:keep-all;}
html {overflow-y:scroll; height:100%; }
body {margin:0;  padding:0; height:100%;}
body.wait *, body.wait {cursor: wait !important;}
html, h1, h2, h3, h4, h5, h6, form, fieldset, img {margin:0;padding:0;border:0;}
/*article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block}*/
html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code,del, dfn, em, img, ins, kbd, q, samp,small, strong, sub, sup, var, b, i, dl, dt, dd,ol, ul, li,form, fieldset, legend, label, table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, figcaption, figure,footer, header, hgroup, menu, nav, section, a, summary, time, mark, audio, video, button{ margin: 0; padding:0;  padding:0; border:0; outline:0; line-height:1.5; font-size:16px; color:#000; font-family:'Noto Sans KR',Dotum,Helvetica,AppleGothic,Sans-serif; font-style:normal; font-weight:400; letter-spacing:-0.5px}
dl, ul, ol, li { list-style:none outside none; }
legend {position:absolute; margin:0; padding:0; font-size:0;line-height:0;text-indent:-9999em;overflow:hidden}
label, input, button, select, img {vertical-align:middle}
input, button {margin:0;padding:0;font-size:14px; -webkit-border-radius:0; -webkit-appearance:none;}
button {cursor:pointer; background:none; }
select::-ms-expand { display: none;}
select {cursor:pointer; margin:0; -moz-appearance:none; -webkit-appearance:none; appearance:none;  border:none; box-sizing:border-box; display:inline-block;font-size:14px;  }
option {color:#000; font-weight:400}
select:focus, input:focus{ outline: none; text-decoration:none;}
p {word-wrap:break-word; word-break:keep-all; line-height:1.5}
hr {display:none}
pre {overflow-x:scroll; white-space: pre-wrap;  white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; }
a { cursor: pointer; display:inline-block; }
a:link, a:visited, a:hover, a:focus, a:active  {text-decoration:none;}
table {width:100%; margin-bottom: 0;  table-layout: fixed;}
table, td, th {  border-collapse: collapse; }
th, td {vertical-align:middle; word-wrap:break-word; /*wor d-break:keep-all;*/}
input, select, option, textarea {font-weight:300; }
caption {font-size:0; line-height:0; position:absolute; left:-9999px; top:-9999px}
em, span, i, b, a, strong {font-size:inherit; color:inherit; font-weight:inherit; line-height:inherit; font-style: inherit;}
input {border:none; -webkit-border-radius: 0; -moz-appearance:none; -webkit-appearance:none; appearance:none; background-color:transparent}
textarea:disabled, input:disabled  {background:#fcfafa}
textarea { display:inline-block; width:100%; border:none; color:#000; box-sizing:border-box; padding:16px; resize: none; font-size:16px; font-weight:300 }
/*placeholder color*/
input::-webkit-input-placeholder { color:#b3b3b3 !important; font-weight:300 }
input::-moz-placeholder { color:#b3b3b3 !important; font-weight:300 }
input:-ms-input-placeholder { color:#b3b3b3 !important; font-weight:300 }
input:-moz-placeholder { color:#b3b3b3 !important; font-weight:300 }
textarea::-webkit-input-placeholder { color:#b3b3b3 !important; font-weight:300  }
textarea::-moz-placeholder { color:#b3b3b3 !important; font-weight:300 }
textarea:-ms-input-placeholder { color:#b3b3b3 !important; font-weight:300 }
textarea:-moz-placeholder { color:#b3b3b3 !important; font-weight:300 }
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none; margin: 0; }
input[type="button"] {cursor:pointer}
img {max-width:100%; }
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {transition: background-color 5000s ease-in-out 0s;-webkit-transition: background-color 9999s ease-out;-webkit-box-shadow: 0 0 0px 1000px transparent inset !important;-webkit-text-fill-color: #000 !important;}
body *::-webkit-scrollbar {width: 5px; }
body *::-webkit-scrollbar-thumb {background-color:#f1f2f6; border-radius:10px }
body *::-webkit-scrollbar-track {background-color:transparent; border-radius:10px }
`;
