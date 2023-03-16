import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Container,Row,Col} from 'react-bootstrap';
import Select from 'react-select'

function ComboSmilator({chars}) {
  const options = []
  const tagsOptions = [
    { value: 'English', label: 'English' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Card Reveal', label: 'Card Reveal' },
    { value: 'Leaks', label: 'Leaks' },
    { value: 'Product', label: 'Product' },
    { value: 'Event', label: 'Event' }
  ]
  
  if (chars) {
    chars.forEach(char => {
      options.push({value: char.id, label:char.title})
    });
  }
  return (
    <div className='desktop-list-row text-center h2 ardela scrollbar scrollbar-primary search-overflow list-vh'>
      {/* <Select
        isMulti
        name="tags"
        options={options}
        className="basic-multi-select Selector"
        classNamePrefix="select"
        placeholder="Select Characters"
        // onChange={(e) => setTags(e)}
        isSearchable
      /> */}
      WIP
    </div>
);
}

export default ComboSmilator;