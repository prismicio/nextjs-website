import React from 'react'
import { Client } from 'prismic-configuration'
import { Header, SliceZone } from 'components'
import DefaultLayout from 'layouts'
import Error from './_error'

const Page = (props) => {
  if (!props.doc) {
    return (
      // Call the standard error page if the document was not found
      // Essential for dealing with previews of documents that have not been published
      <Error statusCode='404' />
    )
  } else {
    return (
      <DefaultLayout>
        <div className='page'>
          <Header menu={props.menu} />
          <SliceZone sliceZone={props.doc.data.page_content} />
        </div>
      </DefaultLayout>
    )
  }
}

Page.getInitialProps = async function ({ req, query }) {
  const { uid } = query
  const page = await Page.getPage(uid, req)
  return {
    doc: page.document,
    menu: page.menu,
    uid: uid
  }
}

Page.getPage = async function (uid, req) {
  try {
    // Queries both the specific page and navigation menu documents
    const document = await Client(req).getByUID('page', uid)
    const menu = await Client(req).getSingle('menu')
    return { document, menu }
  } catch (error) {
    console.error(error)
    return error
  }
}

export default Page
