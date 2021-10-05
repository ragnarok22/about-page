import styles from './base.module.css'
import Head from 'next/head'

const name = 'Reinier Hernández'
export const siteTitle = 'Reinier Hernández'
export const description = 'About Reinier Hernández'

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout