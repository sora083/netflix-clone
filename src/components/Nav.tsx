import { useState, useEffect } from 'react'
import './Nav.scss'

export const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY <= 100) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])

  return (
    <div className={`Nav ${show && 'Nav-black'}`}>
      <img
        className="Nav-logo"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
        alt="TMDB Logo"
      />
      <img
        className="Nav-avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}
