import React from 'react'
import { Client } from 'prismic-configuration'

import DefaultLayout from 'layouts'
import { Header, HomeBanner, SliceZone } from 'components'
import Error from './_error'

const HomePage = ({ doc, menu }) => {
  if (doc) {
    return (
      <DefaultLayout>
        <div className='homepage'>
          <Header menu={menu} />
          <HomeBanner banner={doc.data.homepage_banner[0]} />
          <SliceZone sliceZone={doc.data.page_content} />
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return <Error statusCode="404" />
}

HomePage.getInitialProps = async ({ req }) => {
  try {
    // Query both the homepage and navigation menu documents
    const doc = await Client(req).getSingle('homepage')
    const menu = await Client(req).getSingle('menu')

    return {
      doc,
      menu
    }
  } catch (error) {
    console.error(error)
    return error
  }
}

export default HomePage
