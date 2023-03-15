import React from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharListItem({char,view,setCurrentChar,currentChar}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_cut.png?alt=media`

  if (char) {
    if (view === "Mobile") {
      return (
        <Link to={`/${char.id}`}>
          <div className='char-img-list__bg charlist-item-img-bg'>
            <img src={img} alt="charlist-item-img" className='char-img' />
          </div>
          <h2 className='ardela char-list__txt'>{char.title}</h2>
        </Link>
      );
    } else {
      return (
        <div onClick={() => setCurrentChar(char.id)}>
          <div className={`char-img-list__bg charlist-item-img-bg 
          ${(currentChar === char.id) ? ('char-img-list__active') : ('')}`}>
            <img src={img} alt="charlist-item-img" className='char-img' />
          </div>
          <h2 className='ardela char-list__txt'>{char.title}</h2>
        </div>
      );
    }
  }
}

export default CharListItem;