import css from 'styled-jsx/css'

export const textSectionStyles = css.global`
.text-section-2col {
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2;
  -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
  -moz-column-gap: 40px; /* Firefox */
  column-gap: 40px;
}
.text-section-1col img,
.text-section-2col img,
.gallery img {
  margin-bottom: 1rem;
}
.text-section-1col p:last-child,
.text-section-2col p:last-child {
  margin-bottom: 0;
}
.content-section.text-section-2col {
  margin-bottom: 0;
}
@media (max-width: 767px) {
  .text-section-2col {
    -webkit-column-count: 1; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1;
    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;
  }
}
`
