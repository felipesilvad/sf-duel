import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import {Row,Col} from 'react-bootstrap';
import FilterSelect from './Filters/FilterSelect';
import CharList from './Char/CharList';

function Home() {
  const [chars, setChars] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
    setLoading(false)
  }, [])

  
  const [selectedEffects, setElectedEffects] = useState([])

  function filterEffect(char) {
    if (selectedEffects.length === 0) {
      return true;
    } else {
      return selectedEffects.some((effect) => {
        return char.combo1.effects.includes(effect) ||
        char.combo2.effects.includes(effect) ||
        char.super.effects.includes(effect) ||
        char.passive.effects.includes(effect) ||
        char.f_spirit.effects.includes(effect)
      });
    }
  }

  const sortOrder = {Master: 0, Infernal: 1, Wind: 2, Thunder: 3, Flame: 4, Legendary: 5};

  function order(a, b) {
    return sortOrder[a.faction] - sortOrder[b.faction];
  }

  return (
    <div>
      <h3 className='ardela text-center'>Street Fighter Duel Character List</h3>
      <Row className='mt-2 custom-row'>
        <Col>
          <FilterSelect selectedEffects={selectedEffects} setElectedEffects={setElectedEffects}
          setLoading={setLoading} />
        </Col>
      </Row>
      <div className='mt-2 d-flex flex-wrap justify-content-around desktop-list-row'>
        <CharList chars={chars.sort(order).filter(filterEffect)} loading={loading} />
      </div>
    </div>
  );
}

export default Home;