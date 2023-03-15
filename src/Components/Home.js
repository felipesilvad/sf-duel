import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

function Home() {
  const [chars, setChars] = useState([])

  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])

  return (
    <>
      <MobileView chars={chars} />
      <DesktopView chars={chars} />
    </>
);
}

export default Home;