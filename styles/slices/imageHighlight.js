import css from 'styled-jsx/css'

export const imageHighlightStyles = css.global`
.highlight {
  position: relative;
  overflow: auto;
}
.highlight-left {
  width: 43%;
  float: left;
}
.highlight-right {
  width: 48%;
  float: right;
}
@media (max-width: 767px) {
  .highlight-left,
  .highlight-right {
    width: 100%;
    float: none;
  }
}
`
