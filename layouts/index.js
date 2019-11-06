import React from 'react'
import { Footer, Meta } from 'components'

const DefaultLayout = ({ children }) => (
  <div>
    <Meta />
    <main>{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout
