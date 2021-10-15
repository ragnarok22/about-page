import BaseLayout from "./base"
import Navbar from "../navbar"
import styles from './page.module.css'

const PageLayout = ({ children, className }) => {
  return (
    <BaseLayout className="flex flex-col w-screen h-screen">
      <Navbar />
      <main className={`${styles.main} ${className}`}>
        { children }
      </main>
    </BaseLayout>
  )
}

export default PageLayout