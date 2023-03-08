import React from 'react';

function CharSkillTxtComponent({txt}) {
  const skill_txt = txt.split('/n')

  if (txt && skill_txt) {
    return (
      <>
        {skill_txt.map((skill) => (
          <p className='skill-txt'>{skill}</p>
        ))}
      </>
    );
  }
}

export default CharSkillTxtComponent;