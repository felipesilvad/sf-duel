import React from 'react';
import {Image} from 'react-bootstrap';

function CharStatComponent({value, label, f_spirit, chars, id}) {

  function compare( a, b ) {
    if (label === "Power") {
      if (b.power > a.power){return 1;}
      if (b.power < a.power){return -1;}
      return 0;
    }
    if (label === "ATK") {
      if (b.ATK > a.ATK){return 1;}
      if (b.ATK < a.ATK){return -1;}
      return 0;
    }
    if (label === "DEF") {
      if (b.DEF > a.DEF){return 1;}
      if (b.DEF < a.DEF){return -1;}
      return 0;
    }
    if (label === "SPD") {
      if (b.SPD > a.SPD){return 1;}
      if (b.SPD < a.SPD){return -1;}
      return 0;
    }
    if (label === "HP") {
      if (b.HP > a.HP){return 1;}
      if (b.HP < a.HP){return -1;}
      return 0;
    }
  }
  const getCharsLength = () => {return chars.length}
  const checkPlace = (char) => char.id === id;

  const getPlace = () => {
    const placing = chars.sort(compare).findIndex(checkPlace) + 1
    if (placing === 1) {
      return '1st'
    } else if (placing === 2) {
      return '2nd'
    } else if (placing === 3) {
      return '3rd'
    } else {
      return `${placing}th`
    }
  }

  if (value && label) {
    return (
      <div className={`char-faction__bg d-flex char-stat__bg 
      ${(label === "Power") ? ('justify-content-center') : ('')}`}>
        <Image src={require(`../../Assets/stats/${label}.png`)}
        className='char-faction__img' />
        <div className=''>
          <div className='char-faction__txt'>
            <b className='ardela'>{value}</b>
            {(!f_spirit&&(
              <b className='char-stat__place ml-2'>{getPlace()} / {getCharsLength()}</b>
            ))}
        </div>
        </div>
      </div>
    );
  }
}

export default CharStatComponent;