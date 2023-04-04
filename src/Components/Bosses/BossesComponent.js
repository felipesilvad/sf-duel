import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import BossesItem from './BossesItem';
import {Image} from 'react-bootstrap';

function BossesComponent() {
  const [bosses, setBosses] = useState([])
  const [loading, setLoading] = useState(true)
  
  const effclash = require(`../../Assets/events/effclash.png`)
  useEffect (() => {
    onSnapshot(query(collection(db, `/bosses`)), (snapshot) => {
      setBosses(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
    setLoading(false)
  }, [])

  if (!loading) {
    return (
      <div>
        <h3 className='ardela text-center'>Street Fighter Duel Bosses List</h3>
        {bosses.map((boss) => (
          bosses.event&&(
            <BossesItem boss={boss} />
          )
        ))}
        <div className='d-flex h-100 align-items-center'>
          <Image className='boss-event-img' src={effclash} />
          <h5 className='ardela'>Effigy Clash</h5>
        </div>
        {bosses.map((boss) => (
          !(bosses.event === "Effigy Clash")&&(
            <BossesItem boss={boss} />
          )
        ))}
      </div>
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

export default BossesComponent;