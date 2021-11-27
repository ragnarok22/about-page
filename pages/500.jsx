import { Player } from "@lottiefiles/react-lottie-player"
import lottie500 from "../assets/lottie/500.json"

import styles from "../styles/Error.module.scss"


export default function Custom500() {
  return (
    <div className={styles.error_container}>
      <h1>500 - Server-side error occurred</h1>
    <Player
      autoplay
      src={lottie500}
      className={styles.lottie}
    >
    </Player>
  </div>
  )
}
