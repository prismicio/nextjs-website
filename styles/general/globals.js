import css from 'styled-jsx/css'

export const globals = css.global`
* {
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: #FFF7C7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #FFF7C7; /* Gecko Browsers */
}

/*
* Globals
*/
body {
  padding: 20px;
  color: #72767b;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.4;
  line-height: 28px;
}
a {
  color: #72767B;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.35;
  line-height: 28px;
  text-decoration: none;
}
p a {
  text-decoration: underline;
}
h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
}
h1 {
  font-family: ‘Lora’, Serif; 
  font-size: 42px; 
  font-weight: normal; 
  color: #484D52; 
  line-height: 52px; 
  letter-spacing : 1.14;
  margin-bottom: 1rem;
}
h2, h2 a {
  margin-bottom: 1rem;
  color: #484d52;
  font-size: 32px;
  font-weight: 700;
  letter-spacing : 0.85;
  line-height: 42px;
}
h3, h3 a {
  margin-bottom: 1rem;
  Color: #484d52;
  font-size: 20px;
  font-weight: 400;
  letter-spacing : 0.52;
  line-height: 34px;
}
p {
  margin-bottom: 2rem;
}
pre, ul {
  margin-bottom: 20px;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
img {
  max-width: 100%;
}
.container, header, footer {
  max-width: 980px;
  margin: auto;
}
.content-section {
  margin-bottom: 3.75rem;
}
.quote blockquote {
  quotes: "\201C" "\201D" "\2018" "\2019";
}

@media (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 2rem;
  }
}
`
