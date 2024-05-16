import React from 'react'

import { NavLink } from 'react-router-dom';
import './header.css'

import logo from '../../../assets/images/logo2.png'
import userIcon from '../../../assets/images/user-icon.png'

import { Container, Row } from "reactstrap";

export const Header = () => {
  return <Container>
    <Row>
      <div className='nav__wrapper'>
        <div className='logo'>
          <img src={logo} alt="LogoParaSumercé" />
        </div>

        <div className='navigation'>
          <ul className='menu'>
            <li className='nav_itme'>
              <NavLink to='home'>Inicio</NavLink>
            </li>
            <li className='nav_itme'>
              <NavLink to='home'>Tienda</NavLink>
            </li>
            <li className='nav_itme'>
              <NavLink to='home'>Nosotros</NavLink>
            </li>
            <li className='nav_itme'>
              <NavLink to='home'>Carrito</NavLink>
            </li>
          </ul>
        </div>

        <div className='nav__icons'>

          <span className='fav__icon'><i class="ri-heart-line"></i></span>
          <span className='cart__icon'><i class="ri-shopping-bag-line"></i></span>

          <span><img src={userIcon} alt="IconoUsuario" /></span>
        </div>

        <div className='mobile__menu'>
          <span><i class="ri-menu-line"></i></span>
        </div>


      </div>
    </Row>
  </Container>
}

export default Header;