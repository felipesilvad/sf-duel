import React from 'react';
import TierListItem from './CharListItem';


function TierList({chars, loading}) {

  const new_chars = chars.length

  if (!loading) {
    return (
      chars.map((char) => (
        <TierListItem char={char} new_chars={new_chars} />
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

export default TierList;