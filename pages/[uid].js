import React from 'react'
import { Client } from 'prismic-configuration'

import DefaultLayout from 'layouts'
import { Header, SliceZone } from 'components'
import Error from './_error'

const Page = ({ doc, menu }) => {
  if (doc) {
    return (
      <DefaultLayout>
        <div className="page">
          <Header menu={menu} />
          <SliceZone sliceZone={doc.data.page_content} />
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return <Error statusCode="404" />
}

Page.getInitialProps = async ({ req, query }) => {
  try {
    const uid = query.uid

    // Query both the specific page and navigation menu documents
    const doc = await Client(req).getByUID('page', uid)
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

export default Page
