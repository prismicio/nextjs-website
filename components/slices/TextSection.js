import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { textSectionStyles } from 'styles'

const TextSection = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'

  return (
    <section className={`content-section ${sectionClass}`}>
      <RichText
        render={slice.primary.rich_text}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
      />
      <style jsx global>{textSectionStyles}</style>
    </section>
  )
}

export default TextSection
