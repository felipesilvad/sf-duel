import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Image,Row,Col} from 'react-bootstrap';
import CharSkillComboSim from './CharSkillComboSim';
import ModalSuper from './ModalSuper';
import CharSkillComponent from '../Char/CharSkill';
import CharSkillTxtComponent from '../Char/CharSkillTxt';
import {effectOptions} from '../../data/data.ts';
import ComboSimSkill from './ComboSimSkill';


function ComboSmilator() {
  const [chars, setChars] = useState([])
  const [selectedChars, setSelectedChars] = useState([])
  const [error, setError] = useState('')
  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])
  const getEffect = (txt) => {
    if (effectOptions.filter(effect => effect.title === txt)[0]) {
      const theEffect = effectOptions.filter(effect => effect.title === txt)[0]
      if (theEffect.desc) {
        return (
          <p className='roboto'>
            <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
            {(theEffect.img&&(
              <img className='effect-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
            ))}
            <b className={`skill-color-${theEffect.color}`}>: </b>
            {theEffect.desc&&(
              <CharSkillTxtComponent txt={theEffect.desc} effectDesc={true} />
            )}
          </p>
        )
      }
    } else {return txt}
  }

  const SelectChar = (char) => {
    if (selectedChars.length > 3) {
      setError('You can only select 4 fighters')
    } else {
      setSelectedChars([...selectedChars, char])
    }
  }

  const [selectedSuper, setSelectedSuper] = useState([])
  const [selectedCombo1, setSelectedCombo1] = useState([])
  const [selectedCombo2, setSelectedCombo2] = useState([])
  const [selectedCombo3, setSelectedCombo3] = useState([])


  if (chars) {
    return (
      <div className='desktop-list-row'>
        <h3 className='ardela text-center'>Street Fighter Duel Combo Simulator</h3>
        {error&&(
          <div class="alert alert-danger text-center"><strong>{error}</strong></div>
        )}
        <div className='d-flex flex-wrap justify-content-around desktop-list-row text-center' >
          {chars.map(char => (
            <div key={char.id} className='list-char-div' onClick={() => SelectChar(char)}>
              <Image className='list-char-img' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_s.png?alt=media`} />
              <h6 className='list-char-title'>{char.title}</h6>
            </div>
          ))}
        </div>
        <Row className='custom-row'>
          <Col sm={3}>
            <h4 className={`skill-label skl-Super text-center h4`}>Super</h4>
            {selectedChars&&(
              selectedChars.map(char => (
                <ComboSimSkill getEffect={getEffect} selectSkill={setSelectedSuper} selectedSkill={selectedSuper}
                combo={'super'} id={char.id} skill={char.super} label="Super" img_n="s" />
              ))
            )}
          </Col>
          <Col sm={3}>
            <h4 className={`skill-label skl-Combo text-center h4`}>Combo 1</h4>
            {selectedChars&&(
              selectedChars.map(char => (
                (char.combo1.position === "1") ? (
                  <ComboSimSkill getEffect={getEffect} selectSkill={setSelectedCombo1} selectedSkill={selectedCombo1}
                  selectedSuper={selectedSuper}
                  combo={1} id={char.id} skill={char.combo1} label="Combo" img_n="c1" />
                ) : null
              ))
            )}
          </Col>
          <Col sm={3}>
            <h4 className={`skill-label skl-Combo text-center h4`}>Combo 2</h4>
            {selectedChars&&(
              selectedChars.map(char => (
                <>
                  {(char.combo1.position === "2") ? (
                    <ComboSimSkill getEffect={getEffect} selectSkill={setSelectedCombo2} selectedSkill={selectedCombo2}
                    selectedCombo1={selectedCombo1}
                    combo={2} id={char.id} skill={char.combo1} label="Combo" img_n="c1" />
                  ) : null}
                  {(char.combo2.position === "2") ? (
                    <ComboSimSkill getEffect={getEffect} selectSkill={setSelectedCombo2} selectedSkill={selectedCombo2}
                    selectedCombo1={selectedCombo1}
                    combo={2} id={char.id} skill={char.combo2} label="Combo" img_n="c2" />
                  ) : null}
                </>
              ))
            )}
          </Col>
          <Col sm={3}>
            <h4 className={`skill-label skl-Combo text-center h4`}>Combo 3</h4>
            {selectedChars&&(
              selectedChars.map(char => (
                (char.combo2.position === "3") ? (
                  <ComboSimSkill getEffect={getEffect} selectSkill={setSelectedCombo3} selectedSkill={selectedCombo3}
                  selectedCombo2={selectedCombo2} selectedCombo1={selectedCombo1}
                  combo={3} id={char.id} skill={char.combo2} label="Combo" img_n="c2" />
                ) : null
              ))
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ComboSmilator;