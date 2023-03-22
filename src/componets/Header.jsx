import React from 'react'
import Banner from '../img/banner.jpg'

const Header = () => {
  return (
    <div className='imagenPrincipal'>
      <img src={Banner} alt='banner' className='banner'></img>
      <h1 className='titulo'>Uh que rico... Pizzeria Mamma Mia! 👌</h1>
    </div>
  )
}

export default Header