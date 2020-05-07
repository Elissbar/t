import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className='navbar-brand'>
      Github Поиск
    </div>
    <ul className='navbar-nav'>
      <li className='navbar-item'>
        <NavLink exact to="/" className='navbar-link'>Главная</NavLink>
      </li>
      <li className='navbar-item'>
        <NavLink to="/about" className='navbar-link'>Информация</NavLink>
      </li>
    </ul>
  </nav>
)