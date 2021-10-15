import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, {siteTitle} from '../layouts/base'
import profilePic from '../../public/me.jpg'
import styles from '../../styles/Index.module.scss'

export default function HomeDesktop() {
  const profileWidth = 3376 / 10;
  const profileHeight = 5063 / 10;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={styles.main}>
        <h1 className="mt-4">Reinier Hernández Avila</h1>

        <div className="flex flex-grow justify-center">
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
          </div>

          <Image
            src={profilePic}
            alt="Reinier Hernández Avila"
            width={profileWidth}
            height={profileHeight}
            className={`${styles.profile}  w-1/3`}
          />
          
          <div className={styles.link_list}>
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
        </div>
        <div className={styles.ocean}>
          <div className={styles.wave}></div>
        </div>
      </main>
    </Layout>
  )
}
