import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import master from '../../Assets/master.png'

function CharFactionComponent({value, label}) {
  return (
    <div className='char-faction d-flex px-2'>
      <img src={master} alt="faction-icon" className='char-faction__img' />
      <div className='pt-1'>
        <b className='char-faction__label'>{label}:</b> {value}
      </div>
    </div>
  );
}

export default CharFactionComponent;