import React from 'react'
import DefaultLayout from 'layouts'
import Head from 'next/head'
import { errorStyles } from 'styles'

const Error = (props) => (
  <DefaultLayout>
    <div className='not-found'>
      <Head><title>Error!</title></Head>
      <h1>{props.statusCode
        ? `${props.statusCode} Error`
        : 'Client-side error'}</h1>
      <h2>{props.statusCode === '404' ? 'Document not found' : 'Please contact developer'}</h2>
      <p><a href='/'>Return to homepage</a></p>
    </div>
    <style jsx>{errorStyles}</style>
  </DefaultLayout>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
