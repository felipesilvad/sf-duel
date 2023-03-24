import React, {useState, useEffect} from 'react';
import {Image} from 'react-bootstrap';
import CharSkillTxtComponent from '../Char/CharSkillTxt';

function ComboSimSkill({combo,id,skill,label,img_n,getEffect,selectSkill,selectedSkill,
  selectedSuper,selectedCombo1, selectedCombo2}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_${img_n}.png?alt=media`
  const [skillState, setSkillState] = useState(false)
  const deactivateSkill = () => {
    selectSkill('')
    setSkillState(false)
  }
  const activateSkill = () => setSkillState(true);

  const actuallySelectSkill = (id) => {
    if (selectedSkill === id) {selectSkill('')} else {selectSkill(id)}
  }

  useEffect (() => {
    if (combo === "super") {activateSkill()}
    if (combo === 1) {
      if (selectedSuper) {
        if (selectedSuper === id) {deactivateSkill()}
        if (selectedSuper !== id) {activateSkill()}
      } else {deactivateSkill()}
    }
    if (combo === 2) {
      if (selectedCombo1) {
        if (selectedCombo1 === id) {deactivateSkill()}
        if (selectedCombo1 !== id) {activateSkill()}
      } else {deactivateSkill()}
    }
    if (combo === 3) {
      if (selectedCombo2) {
        if (selectedCombo2 === id || selectedCombo1 === id) {deactivateSkill()}
        if (selectedCombo2 !== id && selectedCombo1 !== id) {activateSkill()}
        console.log(selectedCombo1)
      } else {deactivateSkill()}
    }
  }, [selectedSuper,selectedCombo1,selectedCombo2])

  if (skill && label) {
    return (
      <div className='my-1'>
        <div  className={`d-flex py-2 combosim-combo-h ${
          (skillState === true)?((selectedSkill === id)?('combosim-combo-h-active'):null):('combosim-combo-h-deactive')
        }`}
        onClick={skillState&&(() => actuallySelectSkill(id))}>
          <Image src={img} className={`skill-img-${label}`} />
          {(label === "Combo") ? (
            <Image className={`skill-img-${label} combosim-super-img`} src={`https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_s.png?alt=media`} />
          ) : ('')}
          <div className=''>
            <div className='char-faction__txt ardela'>{skill.title}</div>
            <div className='skill-target '>{skill.target}</div>
          </div>
        </div>
        {(selectedSkill === id) ? (
          <div className='char-skill__bg skill-txt__bg px-2 pt-1 text-left'>
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
            {skill.effects&&(
              skill.effects.map(effectTitle =>(
                getEffect(effectTitle)
              ))
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ComboSimSkill;