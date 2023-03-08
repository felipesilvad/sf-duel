import React from 'react';
import {Image} from 'react-bootstrap';

function CharFactionComponent({value, label}) {
  if (value && label) {
    return (
      <div className={`char-faction__bg d-flex cfgb-${value}`}>
        <Image src={require(`../../Assets/faction/${value}.png`)}
        className='char-faction__img' />
        <div className=''>
          {/* <b className='char-faction__label'>{label}</b> */}
          <div className='char-faction__txt'>{value}</div>
        </div>
      </div>
    );
  }
}

export default CharFactionComponent;