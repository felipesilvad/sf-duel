import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import BossesItem from './BossesItem';

function BossesComponent() {
  const [bosses, setBosses] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect (() => {
    onSnapshot(query(collection(db, `/bosses`)), (snapshot) => {
      setBosses(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
    setLoading(false)
  }, [])

  if (!loading) {
    return (
      <div>
        {bosses.map((boss) => (
          <BossesItem boss={boss} />
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