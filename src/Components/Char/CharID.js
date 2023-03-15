import React from 'react';
import {useParams} from 'react-router-dom';
import CharComponent from './Char';

function CharIDComponent({currentChar}) {
  const param_id = useParams().id

  if (currentChar) {
    return (
      <CharComponent id={currentChar} />
    );
  } else {
    return (
      <CharComponent id={param_id} />
    );
  }
}

export default CharIDComponent;