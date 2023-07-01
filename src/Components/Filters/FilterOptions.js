import React from 'react';
import {MdClose} from 'react-icons/md';
import {effectOptions} from '../../data/data.ts';

function FilterOptions({effectTitle,addEffectToFilter,showX,removeEffectToFilter}) {
  const theEffect = effectOptions.filter(effect => effect.title === effectTitle)[0]
  if (theEffect) {
    if (showX) {
      return (
        <div key={theEffect.title} className={`filter-options-item d-flex skill-color-${theEffect.color}}`}>
          {(theEffect.img&&(
            require(`../../Assets/effects/${theEffect.title}.png`)&&(
              <img className='effect-img mr-1 filter-options-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
            )
          ))}
          <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
          <div onClick={() => removeEffectToFilter(theEffect.title)} className='filter-options-x px-1 mx-1'><MdClose /></div>
        </div>
      );
    } else {
      return (
        <div key={theEffect.title} className={`filter-options-item d-flex skill-color-${theEffect.color}}`}
          onClick={!showX&&(() => addEffectToFilter(effectTitle))}>
          {(theEffect.img&&(
            <img className='effect-img mr-1 filter-options-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
          ))}
          <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
        </div>
      );
    }
  }
}

export default FilterOptions;