import React from 'react';
import './Navbar.css';

const NavBar = () => {

  const nav_items = ['Produtos', 'Contato', 'Sobre'];

  return (
    <>
      <nav>
        <div className='container'>
          <div className='left'>
            <img src={'./images/logotipo_navbar.png'} alt="logo" className='logoNav'/>
            <ul>
              {nav_items.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
            </ul>
          </div>
          <div className='right'>
            <button>Registrar</button>
            <button>Login</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;