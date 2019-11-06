import React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'prismic-reactjs'

import { linkResolver, hrefResolver } from 'prismic-configuration'

// Main DocLink component function for generating links to other pages on this site
const DocLink = ({ children, link, linkClass }) => {
  if (link) {
    const linkUrl = Link.url(link, linkResolver)

    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === 'Document') {
      return (
        <NextLink
          as={linkUrl}
          href={Link.url(link, hrefResolver)}
        >
          <a className={linkClass}>{children}</a>
        </NextLink>
      )
    }

    // Otherwise return a normal anchor element
    return (
      <a className={linkClass} href={linkUrl}>{children}</a>
    )
  }
  return null
}

export default DocLink
