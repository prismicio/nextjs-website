import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { quoteStyles } from 'styles'

const Quote = ({ slice }) => (
  <Fragment>
    <section className='content-section quote'>
      <blockquote>
        {RichText.asText(slice.primary.quote_text)}
      </blockquote>
    </section>
    <style jsx global>{quoteStyles}</style>
  </Fragment>
)

export default Quote
