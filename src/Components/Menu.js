import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MenuComponent() {
  const [currentMenu, setCurrentMenu] = useState('Fighters')

  return (
    <div className='menu-bg w-100'>
      <Container className='d-flex'>
        <Link className={`link menu-button ${(currentMenu==="Fighters")?('menu-button-active'):('')}`}
        to='/' onClick={() => setCurrentMenu('Fighters')}>
          <div className='ardela'>Fighters</div>
        </Link>
        <Link className={`link menu-button ${(currentMenu==="Combo Simulator")?('menu-button-active'):('')}`}
        to='/combo-simulator'  onClick={() => setCurrentMenu('Combo Simulator')}>
          <div className='ardela'>Combo Simulator</div>
        </Link>
      </Container>
    </div>
);
}

export default MenuComponent;