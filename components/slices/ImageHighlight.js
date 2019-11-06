import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { linkResolver } from 'prismic-configuration'
import { imageHighlightStyles } from 'styles'

const ImageHighlight = ({ slice }) => {
  return (
    <Fragment>
      <section className='highlight content-section'>
        <div className='highlight-left'>
          <RichText render={slice.primary.title} linkResolver={linkResolver} />
          <RichText render={slice.primary.headline} linkResolver={linkResolver} />
          {RichText.asText(slice.primary.link_label) !== '' ? (
            <p>
              <DocLink link={slice.primary.link}>
                {RichText.asText(slice.primary.link_label)}
              </DocLink>
            </p>
          ) : '' }
        </div>
        <div className='highlight-right'>
          <img src={slice.primary.featured_image.url} alt={slice.primary.featured_image.alt} />
        </div>
      </section>
      <style jsx global>{imageHighlightStyles}</style>
    </Fragment>
  )
}

export default ImageHighlight
