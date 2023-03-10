import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import {Container,Row} from 'react-bootstrap';
import CharListItem from './CharListItem';
import { useRef } from 'react';

function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [chars, setChars] = useState([])

  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {}
      {chars.map((char) => (
        <CharListItem char={char} />
      ))}
    </div>
);
}

export default Home;