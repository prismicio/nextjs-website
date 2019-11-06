import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver, customLink } from 'prismic-configuration'
import { textSectionStyles } from 'styles'

const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label ? 'text-section-' + slice.slice_label : 'text-section-1col'
  return (
    <Fragment>
      <section className={`content-section ${sectionClass}`}>
        <RichText render={slice.primary.rich_text} linkResolver={linkResolver}
          serializeHyperlink={customLink} />
      </section>
      <style jsx global>{textSectionStyles}</style>
    </Fragment>
  )
}

export default TextSection
