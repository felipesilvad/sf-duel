import React from 'react';

function CharSkillTxtEffects({skill, effects}) {
  const skill_txt = skill.split('|')

  const checkEffect = (txt) => {
    if (effects.filter(effect => effect.title === txt)[0]) {
      const theEffect = effects.filter(effect => effect.title === txt)[0]
      return (
        <skilltxt>
          <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
          {(theEffect.img&&(
            <img className='effect-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
          ))}
        </skilltxt>
      )
    } else {return txt}
  }

  if (skill && skill_txt && effects) {
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