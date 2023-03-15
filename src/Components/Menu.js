import React, { useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import CharListItem from './Char/CharListItem';
import CharIDComponent from './Char/CharID';

function MenuComponent({view,currentMenu,setCurrentMenu}) {
  
  return (
    <div className='d-flex menu-bg'>
      <div className={`menu-button ardela
      ${(currentMenu==="Fighters")?('menu-button-active'):('')}`}
      onClick={() => setCurrentMenu('Fighters')}
      >
        Fighters
      </div>
      <div className={`menu-button ardela
      ${(currentMenu==="Combo Simulator")?('menu-button-active'):('')}`}
      onClick={() => setCurrentMenu('Combo Simulator')}
      >
        Combo Simulator
      </div>
    </div>
);
}

export default MenuComponent;