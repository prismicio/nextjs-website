import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { linkResolver } from 'prismic-configuration'
import { imageGalleryStyles } from 'styles'

const ImageGallery = (props) => (
  <Fragment>
    <section className='image-gallery content-section'>
      <RichText render={props.slice.primary.gallery_title} linkResolver={linkResolver} />
      <div className='gallery'>
        <GalleryItem {...props} />
      </div>
    </section>
    <style jsx global>{imageGalleryStyles}</style>
  </Fragment>
)

const GalleryItem = ({ slice }) => (
  slice.items.map((item, index) => (
      <div className='gallery-item' key={index}>
        <img src={item.image.url} alt={item.image.alt} />
        <RichText render={item.image_description} linkResolver={linkResolver} />
        {RichText.asText(item.link_label) !== '' ? (
          <p className='gallery-link'>
            <DocLink link={item.link}>
              {RichText.asText(item.link_label)}
            </DocLink>
          </p>
        ) : '' }
      </div>
    )
  )
)

export default ImageGallery
