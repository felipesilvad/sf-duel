import React from 'react';
import { Link } from 'react-router-dom';

function CharListItem({char}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_cut.png?alt=media`

  if (char) {
    return (
      <Link to={`/char/${char.id}`}>
        <div className={`char-img-list__bg charlist-item-img-bg ${(char.big_name&&('big-name-div'))}`}>
          <img src={img} alt="charlist-item-img" className='char-img' />
        </div>
        <div>
          <h2 className={`ardela char-list__txt ${(char.big_name&&('big-name'))}`}>
            {char.title}
          </h2>
        </div>
      </Link>
    );
  }
}

export default CharListItem;