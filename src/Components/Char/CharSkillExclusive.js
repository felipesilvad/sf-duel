import React from 'react';
import {Image} from 'react-bootstrap';
import CharSkillTxtComponent from './CharSkillTxt';

function CharSkillExclusive({id, skill, label, img_n}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_${img_n}.png?alt=media`
  const car_icon = require(`../../Assets/car_icon.jpg`)
  if (skill && label) {
    return (
      <div className='my-1'>
        <div className={`char-skill__bg d-flex pt-2 skbg-${label}`}>
          <Image src={img} className={`skill-img-${label}`} />
          {(label === "Combo") ? (
            <Image src={require(`../../Assets/stats/combo${skill.position}.png`)} className='combo-position-img' />
          ) : ('')}
          <div className=''>
            <div className={`skill-label skl-${label}`}>{label}</div>
            <div className='char-faction__txt ardela'>{skill.title}</div>
            <div className='skill-target '>Passive</div>
          </div>
        </div>
        <div className='char-skill__bg skill-txt__bg px-2 pt-1'>
          <div className=''>
            <b className='skill-label lv-color'><Image className='car-icon' src={car_icon} /> [3/3]</b><br />
            <CharSkillTxtComponent txt={skill.lv1} />
            <b className='skill-label lv-color'><Image className='car-icon' src={car_icon} /> [6/6]</b><br />
            <CharSkillTxtComponent txt={skill.lv2} />
          </div>
        </div>
      </div>
    );
  }
}

export default CharSkillExclusive;