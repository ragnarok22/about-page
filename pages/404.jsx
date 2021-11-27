import Link from 'next/link'
import { Player } from "@lottiefiles/react-lottie-player"

import styles from "../styles/Error.module.scss"
import lottieNotFound from "../assets/lottie/404.json"
import BaseLayout from '../components/layouts/base'

export default function Custom404() {
  return (
    <BaseLayout className={styles.error_container}>
      <Player
        autoplay
        src={lottieNotFound}
        className={styles.lottie}
      >
      </Player>
      <Link href="/">
        <a className="underline text-green-900">Inicio</a>
      </Link>
    </BaseLayout>
  )
}
