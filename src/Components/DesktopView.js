import React, { useState } from 'react';
import CharListItem from './Char/CharListItem';
import ComboSmilatorDesktop from './ComboSimulator/ComboSmilator';
function DesktopView({chars}) {

  return (
    <div className=''>
      <div className='d-flex flex-wrap justify-content-around desktop-list-row'>
        {chars.map((char) => (
          <CharListItem char={char} />
        ))}
      </div>
    </div>
  );
}

export default DesktopView;