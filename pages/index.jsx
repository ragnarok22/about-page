import Link from 'next/link'
import Layout, {siteTitle} from '../components/layouts/base'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <Link href="/about">
          <a>About me</a>
        </Link>
      </main>

      <Footer/>
    </Layout>
  )
}
