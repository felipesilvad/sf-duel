import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Image,Row,Col} from 'react-bootstrap';
import CharSkillComboSim from './CharSkillComboSim';

function ComboSmilator() {
  const [chars, setChars] = useState([])
  const [selectedChars, setSelectedChars] = useState([])
  const [error, setError] = useState('')

  const [selectedSuper, setSelectedSuper] = useState([])


  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])

  const SelectChar = (char) => {
    // if (selectedChars.length > 3) {
    //   setError('You can only select 4 fighters')
    // }
    setSelectedChars([...selectedChars, char])
  }

  if (chars) {
    return (
      <div className='desktop-list-row text-center'>
        <h1 className='ardela'>Work in Progress</h1>
        {/* {error&&(
          <div class="alert alert-danger"><strong>{error}</strong></div>
        )}
        <div className='d-flex flex-wrap justify-content-around desktop-list-row' >
          {chars.map(char => (
            <div key={char.id} className='list-char-div' onClick={() => SelectChar(char)}>
              <Image className='list-char-img' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_s.png?alt=media`} />
              <h6 className='list-char-title'>{char.title}</h6>
            </div>
          ))}
        </div>
        <Row>
          <Col>
            {selectedChars.map(char => (
              <CharSkillComboSim id={char.id} skill={char.super} 
              label="Super" img_n="s" combo_sim={true} selectedSill={selectedSuper} setSelectedSkill={setSelectedSuper} />
            ))}
          </Col>
          <Col>
            {selectedChars.map(char => (
              <CharSkillComboSim id={char.id} skill={char.combo1} 
              label="Combo" img_n="c1" combo_sim={true} />
            ))}
          </Col>
          <Col>
            {selectedChars.map(char => (
              <CharSkillComboSim id={char.id} skill={char.combo2} 
              label="Combo" img_n="c2" />
            ))}
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default ComboSmilator;