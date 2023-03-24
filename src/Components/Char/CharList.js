import React from 'react';
import CharListItem from './CharListItem';


function CharList({chars, loading}) {

  if (!loading) {
    return (
      chars.map((char) => (
        <CharListItem char={char} />
      ))
    )
  } else {
    return (
      <div className='mt-2 d-flex flex-wrap justify-content-around desktop-list-row'>
        <div class="mt-2 spinner-border color-highlight" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    )
  }
  ;
}

export default CharList;