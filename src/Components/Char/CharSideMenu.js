import React from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharSideMenu({id, chars}) {
  
  return (
    <div>
      {chars.map(char => (
        <Link to={`/char/${char.id}`} className='link' >
          <div className={`side-menu-bg d-flex h-100 align-items-center my-1
          ${(id===char.id) ? ('side-menu-bg-active') : ('')}`}>
            <Image className='bond-img ' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_sm.png?alt=media`} />
            <div className='char-side-menu__txt ardela'>{char.title}</div>
          </div>
        </Link>
      ))}
    </div>
);
}

export default CharSideMenu;