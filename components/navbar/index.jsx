import NavButton from "./nav-button"
import styles from './navbar.module.scss'
import navs from './items.js'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navs.map((nav, i) => (
          <NavButton key={i} url={nav.url} text={nav.text} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar