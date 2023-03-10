import React, {useState, useEffect} from 'react';
import {Image} from 'react-bootstrap';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../../firebase';

function CharBondsComponent({bond}) {
  const [bondID, setBondID] = useState('0000')
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${bondID}_sm.png?alt=media`

  useEffect(() => {
    if (bond) {
      onSnapshot(query(collection(db, `/chars/`), where("title", "==", bond[0])), (snapshot) => {
        setBondID(snapshot.docs.map(doc => (doc.id)))
      });
    }
  }, [bond]);

  if (bond) {
    return (
      <div className='skill-txt__bg skill-txt__bg-bt'>
        <div className={`char-faction__bg d-flex h-100 align-items-center`} >
          <Image className='bond-img' src={img} />
          <div className='char-bond__txt ardela'>{bond[0]}</div>
        </div>
        <div className='px-1 mb-1'>
          <p><cjk className="bonds-label">◦Own <b className='bond-A'>A</b> Grade {bond[0]}</cjk> <cjk>{bond[1]}</cjk></p>
          <p><cjk className="bonds-label">◦Own <b className='bond-S'>S</b> Grade {bond[0]}</cjk> <cjk>{bond[2]}</cjk></p>
          <p><cjk className="bonds-label">◦Own <b className='bond-SS'>SS</b> Grade {bond[0]}</cjk> <cjk>{bond[3]}</cjk></p>
        </div>
      </div>
      
    );
  }
}

export default CharBondsComponent;