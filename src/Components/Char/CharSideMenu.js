import React from 'react';
import {Image} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function CharSideMenu({id, chars}) {
  const sortOrder = {Master: 0, Infernal: 1, Wind: 2, Thunder: 3, Flame: 4, Legendary: 5};

  function order(a, b) {
    return sortOrder[a.faction] - sortOrder[b.faction];
  }
  return (
    <div>
      {chars.sort(order).map(char => (
        <a href={`https://sfduel-wiki.com/char/${char.id}`} className='link' >
          <div className={`side-menu-bg d-flex h-100 align-items-center my-1
          ${(id===char.id) ? ('side-menu-bg-active') : ('')}`}>
            <Image className='bond-img ' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_sm.png?alt=media`} />
            <div className='char-side-menu__txt ardela'>{char.title}</div>
          </div>
        </a>
      ))}
    </div>
);
}

export default CharSideMenu;