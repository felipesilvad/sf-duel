import React from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharListItem({char}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_cut.png?alt=media`

  if (char) {
    return (
      <Link to={`/${char.id}`}>
        <div className='char-img__bg charlist-item-img-bg'>
          <img src={img} alt="charlist-item-img" className='char-img' />
        </div>
        <h2 className='ardela text-center'>{char.title}</h2>
      </Link>
    );
  }
}

export default CharListItem;