import React from 'react'
import { navLinks } from '../constants'
import logo from '../../apple-macbook_public/public/logo.svg'
import search from '../../apple-macbook_public/public/search.svg'
import cart from '../../apple-macbook_public/public/cart.svg'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt='Apple logo'/>

            <ul>
                {navLinks.map((link) =>(
                    <li key={link.label}>
                         <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src={search} alt='search'/>
                </button>
                <button>
                    <img src={cart} alt='cart'/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
