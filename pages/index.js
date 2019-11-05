import React from 'react'
import { Client } from 'prismic-configuration'
import { Header, HomeBanner, SliceZone } from 'components'
import DefaultLayout from 'layouts'

const HomePage = (props) => (
  // With the Prismic data in this.props we can render the components for the Homepage
  // passing to each component the required object
  <DefaultLayout>
    <div className='homepage'>
      <Header menu={props.menu} />
      <HomeBanner banner={props.doc.data.homepage_banner[0]} />
      <SliceZone sliceZone={props.doc.data.page_content} />
    </div>
  </DefaultLayout>
)

// Fetch relevant data from Prismic before rendering
HomePage.getInitialProps = async function ({ req }) {
  const home = await HomePage.getHomePage(req)
  return {
    doc: home.document,
    menu: home.menu
  }
}

HomePage.getHomePage = async function (req) {
  try {
    // Queries both the homepage and navigation menu documents
    const document = await Client(req).getSingle('homepage')
    const menu = await Client(req).getSingle('menu')
    return { document, menu }
  } catch (error) {
    console.error(error)
    return error
  }
}

export default HomePage
