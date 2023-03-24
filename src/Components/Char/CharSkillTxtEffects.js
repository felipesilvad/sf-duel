import React from 'react';
import {effectOptions} from '../../data/data.ts';

function CharSkillTxtEffects({skill}) {
  const skill_txt = skill.split('|')

  const checkEffect = (txt) => {
    if (effectOptions.filter(effect => effect.title === txt)[0]) {
      const theEffect = effectOptions.filter(effect => effect.title === txt)[0]
      return (
        <skilltxt key={theEffect.title}>
          <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
          {(theEffect.img&&(
            <img className='ml-1 effect-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
          ))}
        </skilltxt>
      )
    } else {return txt}
  }

  if (skill && skill_txt && effectOptions) {
    return (
      <>
        {skill_txt.map((txt) => (
         checkEffect(txt)
        ))}
      </>
    );
  }
}

export default CharSkillTxtEffects;