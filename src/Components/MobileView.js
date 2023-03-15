import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import {Container,Row,Col} from 'react-bootstrap';
import CharListItem from './Char/CharListItem';

function MobileView({chars}) {

  return (
    <div className='d-sm-block d-md-block d-lg-none'>
      <div className='d-flex flex-wrap justify-content-around'>
        {chars.map((char) => (
          <CharListItem char={char} view={'Mobile'} />
        ))}
      </div>
    </div>
);
}

export default MobileView;