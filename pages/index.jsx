import HomeMobile from '../components/Home/Mobile'
import HomeDesktop from '../components/Home/Desktop'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  if(width <= 680) {
    return <HomeMobile />
  }
  return <HomeDesktop />
}
