import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Image,Row,Col} from 'react-bootstrap';
import CharSkillTxtComponent from '../Char/CharSkillTxt';
import {effectOptions} from '../../data/data.ts';
import ComboSimSkill from './ComboSimSkill';
import AdComponent from '../Ads/AdComponent';


function ComboSmilator() {
  const [chars, setChars] = useState([])
  const [selectedChars, setSelectedChars] = useState([])
  const [error, setError] = useState('')
  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])

  const checkSelectedChar = (id) => {
    if (selectedChars.filter(e => e.id === id).length > 0) {return true} else {return false}
  }

  const SelectChar = (char) => {
    setError('')
    if (checkSelectedChar(char.id)) {
      const i = selectedChars.findIndex((selectedChar) => selectedChar.id === char.id)
      selectedChars.splice(i, 1);
    } else {
      setSelectedChars([...selectedChars, char])
    }
  }
  
  const [selectedSS, setSelectedSS] = useState([])
  const [selectedCombo1, setSelectedCombo1] = useState([])
  const [selectedCombo2, setSelectedCombo2] = useState([])
  const [selectedCombo3, setSelectedCombo3] = useState([])

  const sortOrder = {Master: 0, Infernal: 1, Wind: 2, Thunder: 3, Flame: 4, Legendary: 5};
  function order(a, b) {
    return sortOrder[a.faction] - sortOrder[b.faction];
  }
  if (chars) {
    return (
      <div className='desktop-list-row'>

        <div className='d-flex flex-wrap justify-content-around desktop-list-row text-center' >
          {chars.sort(order).map(char => (
            <div key={char.id} className={`list-char-div ${(checkSelectedChar(char.id)&&('list-char-div-active'))}`} onClick={() => SelectChar(char)}>
              <Image className='list-char-img' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_s.png?alt=media`} />
              <h6 className='list-char-title'>{char.title}</h6>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default ComboSmilator;