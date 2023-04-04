import React from 'react';
import { Link } from 'react-router-dom';

function CharListItem({char}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_cut.png?alt=media`

  if (char) {
    return (
      <Link to={`/char/${char.id}`}>
        <div className={`char-img-list__bg charlist-item-img-bg`}>
          <img src={img} alt="charlist-item-img" className='char-img' />
        </div>
        <div>
          <h2 className={`ardela char-list__txt`}>
            {(char.id === '0013'||char.id === '0021'||char.id === '0031'||char.id === '0035'||char.id === '0036') ? (
              <div className='d-flex h-100 align-text-bottom mb-0'><h4 className='char-list-sm-title mb-0'>{char.title.split(' ')[0]}</h4><h2 className='font-bolder mb-0'>{char.title.split(' ')[1]}</h2></div>
            ) : (
              (char.id === '0022'||char.id === '0032'||char.id === '0033') ? (
                <div className='d-flex h-100 align-text-bottom mb-0'>
                  <h6 className='char-list-sm-title mb-0 mt-3'>{char.title.split(' ')[0]}</h6>
                  <h2 className='font-bolder mb-0'>{char.title.split(' ')[1]}</h2>
                </div>
              ) : ((char.id === '0034') ? (
                <div className='d-flex h-100 align-text-bottom mb-0'>
                  <h5 className='char-list-sm-title mb-0'>{char.title.split(' ')[0]}</h5>
                  <h5 className='char-list-sm-title mb-0'>{char.title.split(' ')[1]}</h5>
                  <h2 className='font-bolder mb-0'>{char.title.split(' ')[2]}</h2>
                </div>
              ) : (char.title))
            )}
          </h2>
        </div>
      </Link>
    );
  }
}

export default CharListItem;