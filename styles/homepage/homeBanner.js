import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.homepage-banner {
  margin: -70px 0 80px;
  padding: 10em 0 8em;
  background-position: center center;
  background-size: cover;
  color: #ffffff;
  line-height: 1.75;
  text-align: center;
}
.banner-content {
  text-align: center;
}
.banner-title,
.banner-description {
  width: 90%;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
}
.banner-title {
  color: #ffffff;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
}
.banner-button {
  background: #ffffff;
  border-radius: 7px;
  color: #484d52;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 40px;
}
.banner-button:hover {
  background: #c8c9cb;
}
@media (max-width: 767px) {
  .homepage-banner {
    margin: 0 0 40px;
    padding: 10em 0 6em;
  }
  .banner-title {
    font-size: 50px;
    line-height: 50px;
  }
}
`
