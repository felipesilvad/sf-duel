import React from 'react';
import {Image} from 'react-bootstrap';

function CharStatComponent({value, label, f_spirit, chars, id}) {

  function compare( a, b ) {
    if (label === "Power") {
      if (parseInt(b.power) > parseInt(a.power)){return 1;}
      if (parseInt(b.power) < parseInt(a.power)){return -1;}
      return 0;
    }
    if (label === "ATK") {
      if (parseInt(b.ATK) > parseInt(a.ATK)){return 1;}
      if (parseInt(b.ATK) < parseInt(a.ATK)){return -1;}
      return 0;
    }
    if (label === "DEF") {
      if (parseInt(b.DEF) > parseInt(a.DEF)){return 1;}
      if (parseInt(b.DEF) < parseInt(a.DEF)){return -1;}
      return 0;
    }
    if (label === "SPD") {
      if (parseInt(b.SPD) > parseInt(a.SPD)){return 1;}
      if (parseInt(b.SPD) < parseInt(a.SPD)){return -1;}
      return 0;
    }
    if (label === "HP") {
      if (parseInt(b.HP) > parseInt(a.HP)){return 1;}
      if (parseInt(b.HP) < parseInt(a.HP)){return -1;}
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