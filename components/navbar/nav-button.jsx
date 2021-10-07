import Link from 'next/link'

const NavButton = ({ url, text}) => {
  return (
    <li>
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default NavButton