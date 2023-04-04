import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import FSItem from './FSItem';
import {Row} from 'react-bootstrap';

function FSList() {
  const [FSs, setFSs] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect (() => {
    onSnapshot(query(collection(db, `/fs`)), (snapshot) => {
      setFSs(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
    setLoading(false)
  }, [])

  if (!loading) {
    return (
      <div>
        <Row>
          {FSs.map((fs) => (
            <FSItem fs={fs} />
          ))}
        </Row>
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

export default FSList;