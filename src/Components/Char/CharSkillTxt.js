import React from 'react';
import CharSkillTxtEffects from './CharSkillTxtEffects';

function CharSkillTxtComponent({txt, effects, effectDesc}) {
  const skill_txt = txt.split('/n')

  if (txt && skill_txt) {
    if (effectDesc) {
      return (
        <>
          {skill_txt.map((skill) => (
            <normaltxt className='skill-txt'>
              <CharSkillTxtEffects effects={effects} skill={skill} />
            </normaltxt>
          ))}
        </>
      );
    } else {
      return (
        <>
          {skill_txt.map((skill) => (
            <p className='skill-txt'>
              <CharSkillTxtEffects effects={effects} skill={skill} />
            </p>
          ))}
        </>
      );
    }
  }
}

export default CharSkillTxtComponent;