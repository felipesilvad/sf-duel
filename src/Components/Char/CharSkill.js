import React, {useState} from 'react';
import {Image} from 'react-bootstrap';
import CharSkillTxtComponent from './CharSkillTxt';

function CharSkillComponent({id, skill, label, img_n}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_${img_n}.png?alt=media`

  const effects = [
    {title:"Control", color: "blue", desc: "Includes Silence, Stun, Charm, and Taunt effects."},
    {title:"Armor Break", color: "orange", img:true, desc: "Decreases DEF by 3% for 15s. Stacks up to 10 times."},
    {title:"Weaken", color: "blue", desc: "Decreases ATK by 5% for 15s. Stacks up to 10 times."},
    {title:"Base chance", color:"blue", desc:"Affected by Effect Accuracy and Effect Resist."},
    {title:"Infernal King", color:"orange", desc:"Increases DMG by 30%. Cannot receive any healing from others."},
    {title:"Saber", color:"blue", desc:"Each stack allows the fighter's attacks to ignore 7% of enemy DEF. Stacks up to 5 times and cannot be dispelled."},
    {title:"Stun", color:"orange", img:true, desc:"Cannot move, attack, or use active skills."},
  ] 

  const [skillEffects, setSkillEffects] = useState([])
  

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
            <div className='skill-target '>{skill.target}</div>
          </div>
        </div>
        <div className='char-skill__bg skill-txt__bg px-2 pt-1'>
          <CharSkillTxtComponent txt={skill.lv1} effects={effects}
          skillEffects={skillEffects} setSkillEffects={setSkillEffects}/>
          <div className='d-flex'>
            <div className='vl'></div>
            <div className=''>
              <b className='skill-label lv-color'>Lv.2</b><br />
              <CharSkillTxtComponent txt={skill.lv2} effects={effects}
              skillEffects={skillEffects} setSkillEffects={setSkillEffects}/>
              <b className='skill-label lv-color'>Lv.3</b><br />
              <CharSkillTxtComponent txt={skill.lv3} effects={effects}
              skillEffects={skillEffects} setSkillEffects={setSkillEffects}/>
              {skill.lv4&&(
                <>
                  <b className='skill-label lv-color'>Lv.4</b><br />
                  <CharSkillTxtComponent txt={skill.lv4} effects={effects}
                  skillEffects={skillEffects} setSkillEffects={setSkillEffects}/>
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