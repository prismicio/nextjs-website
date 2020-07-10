import React from 'react'

import DefaultLayout from 'layouts'
import { Header, SliceZone } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'

import { Client } from 'utils/prismicHelpers'

const Page = ({ doc, menu }) => {
  if (doc && doc.data) {
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
  return null;
}


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const client = Client()

  const doc = await client.getByUID('page', params.uid, ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}
  
  return {
    props: {
      preview,
      menu,
      doc
    }
  }
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true,
  }
}

export default Page
