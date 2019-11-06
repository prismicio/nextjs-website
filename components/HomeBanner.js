import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { homeBannerStyles } from 'styles'

const HomeBanner = ({ banner }) => {
  return (
    <Fragment>
      <section
        className='homepage-banner'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' +
            banner.image.url +
            ')'
        }}
      >
        <div className='banner-content container'>
          <h2 className='banner-title'>{RichText.asText(banner.title)}</h2>
          <p className='banner-description'>
            {RichText.asText(banner.tagline)}
          </p>
          {RichText.asText(banner.button_label) !== '' ? (
            // Displays the button link only if it's been defined
            <DocLink
              link={banner.button_link}
              linkClass="banner-button"
            >
              {RichText.asText(banner.button_label)}
            </DocLink>
          ) : (
            ''
          )}
        </div>
      </section>
      <style jsx global>{homeBannerStyles}</style>
    </Fragment>
  )
}

export default HomeBanner
