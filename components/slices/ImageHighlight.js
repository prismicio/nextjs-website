import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { linkResolver } from 'prismic-configuration'

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
      <style jsx>{`
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
      `}</style>
    </Fragment>
  )
}

export default ImageHighlight
