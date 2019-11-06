import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { headerStyles } from 'styles'

const MenuLinks = ({ menu }) => (
  menu.data.menu_links.map((menuLink) => {
    return (
      <li key={menuLink.link.id}>
        <DocLink link={menuLink.link}>
          {RichText.asText(menuLink.label)}
        </DocLink>
      </li>
    )
  })
)

const Header = (menu) => (
  <Fragment>
    <header className='site-header'>
      <NextLink href='/'>
        <a><div className='logo'>Example Site</div></a>
      </NextLink>
      <nav>
        <ul>
          <MenuLinks {...menu} />
        </ul>
      </nav>
    </header>
    <style jsx global>{ headerStyles }</style>
  </Fragment>
)

export default Header
