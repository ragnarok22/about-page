import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layouts/base'
import profilePic from '../public/me.jpg'
import styles from '../styles/Mobile.module.scss'

export default function Home() {
  const profileWidth = 3376 / 10;
  const profileHeight = 5063 / 10;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={styles.main}>
        <h1>Reinier Hernández Avila</h1>

        <div className={styles.content}>
          <div className={styles.link_list}>
            <Link href="/about">
              <a>Sobre mi</a>
            </Link>
            <Link href="/connect">
              <a className={styles.right}>Conecta</a>
            </Link>
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
            <Link href="/projects">
              <a>Proyectos</a>
            </Link>
            <Link href="/tools">
              <a className={styles.left}>Herramientas</a>
            </Link>
            <Link href="/projects">
              <a>Proyectos</a>
            </Link>
          </div>

          <Image
            src={profilePic}
            alt="Reinier Hernández Avila"
            width={profileWidth}
            height={profileHeight}
            className={styles.profile}
          />
        </div>
        <div className={styles.ocean}>
          <div className={styles.wave} />
        </div>
      </main>
    </Layout>
  )
}
