import React from 'react';
import {Image} from 'react-bootstrap';

function CharStatComponent({value, label}) {
  if (value && label) {
    return (
      <div className={`char-faction__bg d-flex char-stat__bg 
      ${(label === "Power") ? ('justify-content-center') : ('')}`}>
        <Image src={require(`../../Assets/stats/${label}.png`)}
        className='char-faction__img' />
        <div className=''>
          <div className='char-faction__txt'>
            <b className='ardela'>{value}</b>
            <b className='char-stat__place ml-2'>/2nd</b>
        </div>
        </div>
      </div>
    );
  }
}

export default CharStatComponent;