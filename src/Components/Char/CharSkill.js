import React from 'react';
import {Image} from 'react-bootstrap';
import CharSkillTxtComponent from './CharSkillTxt';

function CharSkillComponent({id, skill, label, img_n}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_${img_n}.png?alt=media`

  if (skill && label) {
    return (
      <div className='my-1'>
        <div className={`char-faction__bg d-flex pt-2 skbg-${label}`}>
          <Image src={img} className={`skill-img-${label}`} />
          {(label === "Combo") ? (
            <Image src={require(`../../Assets/stats/combo${skill.position}.png`)} className='combo-position-img' />
          ) : ('')}
          <div className=''>
            <div className={`skill-label skl-${label}`}>{label}</div>
            <div className='char-faction__txt ardela'>{skill.title}</div>
            <div className='skill-target '>{skill.target}</div>
          </div>
        </div>
        <div className='char-faction__bg skill-txt__bg px-2 pt-1'>
          <CharSkillTxtComponent txt={skill.lv1} />
          <div className='d-flex'>
            <div className='vl'></div>
            <div className=''>
              <b className='skill-label lv-color'>Lv.2</b><br />
              <CharSkillTxtComponent txt={skill.lv2} />
              <b className='skill-label lv-color'>Lv.3</b><br />
              <CharSkillTxtComponent txt={skill.lv3} />
              {skill.lv4&&(
                <>
                  <b className='skill-label lv-color'>Lv.4</b><br />
                  <CharSkillTxtComponent txt={skill.lv4} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CharSkillComponent;