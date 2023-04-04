import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Image,Row,Col} from 'react-bootstrap';
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
  const checkSelectedChar = (id) => {
    if (selectedChars.filter(e => e.id === id).length > 0) {return true} else {return false}
  }

  const SelectChar = (char) => {
    setError('')
    if (checkSelectedChar(char.id)) {
      const i = selectedChars.findIndex((selectedChar) => selectedChar.id === char.id)
      selectedChars.splice(i, 1);
    } else {
      if (selectedChars.length > 3) {
        setError('You can only select 4 fighters')
      } else {
        setSelectedChars([...selectedChars, char])
      }
    }
  }
  
  const [selectedSuper, setSelectedSuper] = useState([])
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
        <h3 className='ardela text-center'>Street Fighter Duel Combo Simulator</h3>
        {error&&(
          <div class="alert alert-danger text-center"><strong>{error}</strong></div>
        )}
        <div className='d-flex flex-wrap justify-content-around desktop-list-row text-center' >
          {chars.sort(order).map(char => (
            <div key={char.id} className={`list-char-div ${(checkSelectedChar(char.id)&&('list-char-div-active'))}`} onClick={() => SelectChar(char)}>
              <Image className='list-char-img' src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${char.id}_s.png?alt=media`} />
              <h6 className='list-char-title'>{char.title}</h6>
            </div>
          ))}
        </div>
        <amp-ad width="100vw" height="320"
            type="adsense"
            data-ad-client="ca-pub-9944055610365530"
            data-ad-slot="3139577697"
            data-auto-format="rspv"
            data-full-width="">
          <div overflow=""></div>
        </amp-ad>
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
        <div>
          <p>1. Cannot use Super Combo skill when tagging an undeployed fighter.</p>
          <p>2. A fighter's Super Combo cannot activate their own Combo.</p>
          <p>3. The same fighter cannot use 2 Combos during one Combo Chain.</p>
        </div>
      </div>
    );
  }
}

export default ComboSmilator;