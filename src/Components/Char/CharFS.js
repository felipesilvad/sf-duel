import React from 'react';
import {Image} from 'react-bootstrap';
import CharStatComponent from './CharStat';
import CharSkillTxtComponent from './CharSkillTxt';

function CharFSComponent({f_spirit, id, char_title, effects, getEffect}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_fs.png?alt=media`
  const imgSkill = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_fss.png?alt=media`

  if (f_spirit) {
    return (
      <div className='f-spirit-bg  p-1'>
        <div className='d-flex w-100 justify-content-center ralign-items-cente'>
          <Image src={img} />
          <div className='w-100 h-100 mr-2'>
            <div className='char-faction__txt ardela text-center'>{f_spirit.title}</div>
            <div className='text-center skill-label lv-color f-spirit-esxlusive-txt'>Exclusive to {char_title}</div>
            <CharStatComponent label="Power" value={f_spirit.power} f_spirit={true} />
          </div>
        </div>
        <div className={`char-faction__bg`}>
          <div className='f-spirit-stat__bg ardela px-2'>Fighting Spirit Stats</div>
          <div className='roboto mx-3 mt-1'>
            {f_spirit.status.map((stat) => (
              <>{stat}<br /></>
            ))}
          </div>
          <div className='char-stat__bg ardela mt-2 mb-2 d-flex h-100 align-items-center'>
            <Image className='skill-img-Passive' src={imgSkill} />
            <div className=''>
              <b className='roboto h6'>SKILL: </b>{f_spirit.skill}
            </div>
          </div>
          <CharSkillTxtComponent effects={effects} txt={f_spirit.txt0} />
          <div className='d-flex'>
            <div className='vl'></div>
            <div className=''>
              <b className='skill-label lv-color'>{"[Unlocked at +5]"}</b><br />
              <CharSkillTxtComponent effects={effects} txt={f_spirit.txt5} />
              <b className='skill-label lv-color'>{"[Unlocked at +10]"}</b><br />
              <CharSkillTxtComponent effects={effects} txt={f_spirit.txt10} />
              <b className='skill-label lv-color'>{"[Unlocked at +20]"}</b><br />
              <CharSkillTxtComponent effects={effects} txt={f_spirit.txt20} />
              <b className='skill-label lv-color'>{"[Unlocked at +30]"}</b><br />
              <CharSkillTxtComponent effects={effects} txt={f_spirit.txt30} />
            </div>
          </div>
          {f_spirit.effects&&(
            f_spirit.effects.map(effectTitle =>(
              getEffect(effectTitle)
            ))
          )}
          <hr />
          <p className='skill-txt desc-txt mx-1'>{f_spirit.desc}</p>
        </div>
      </div>
      
    );
  }
}

export default CharFSComponent;