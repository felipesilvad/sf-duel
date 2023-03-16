import React from 'react';
import CharSkillTxtEffects from './CharSkillTxtEffects';

function CharSkillTxtComponent({txt,effects,skillEffects,setSkillEffects}) {
  const skill_txt = txt.split('/n')

  if (txt && skill_txt) {
    return (
      <>
        {skill_txt.map((skill) => (
          <p className='skill-txt'>
            <CharSkillTxtEffects skill={skill} effects={effects} 
            skillEffects={skillEffects} setSkillEffects={setSkillEffects}/>
            {/* {skill} */}
          </p>
        ))}
      </>
    );
  }
}

export default CharSkillTxtComponent;