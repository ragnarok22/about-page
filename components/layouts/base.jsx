import styles from './base.module.css'
import Head from 'next/head'

const name = 'Reinier Hernández'
export const siteTitle = 'Reinier Hernández'
export const description = 'About Reinier Hernández'

const BaseLayout = ({ children, className }) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

export default BaseLayout