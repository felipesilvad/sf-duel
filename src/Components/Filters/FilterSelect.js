import React,  {useState} from 'react';
import {effectOptions} from '../../data/data.ts';
import FilterOptions from './FilterOptions';
import {Button,Form} from 'react-bootstrap';
import {BsCaretDownFill} from 'react-icons/bs';
import {BsCaretUpFill} from 'react-icons/bs';

function FilterSelect({selectedEffects,setElectedEffects,setLoading,setSeatchTxt}) {
  const [showOptions, setShowOptions] = useState(false)
  const turnOptions = () => setShowOptions(!showOptions)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function loading() {
    await sleep(400)
    setLoading(false)
  }

  const addEffectToFilter = (effectTitle) => {
    setLoading(true)
    setElectedEffects([...selectedEffects,effectTitle])
    turnOptions()
    loading()
  }

  const removeEffectToFilter = (effectTitle) => {
    setLoading(true)
    function checkEffect(effect) {return effect === effectTitle}
    setElectedEffects(selectedEffects.filter((effect,index) => index !== selectedEffects.findIndex(checkEffect)))
    loading()
  }

  function filterEffectOptions(effectOption) {
    if (selectedEffects.length === 0) {
      return true;
    } else {
      return selectedEffects.some((effect) => {
        return effectOption.title !== effect
      });
    }
  }

  return (
    <div>
      <div className='d-flex mb-1'>
        <Form.Control type="search" placeholder="Search" onChange={(e) => setSeatchTxt(e.target.value)} />
      </div>
      <div className='filter-select d-flex flex-wrap'>
        <Button className="add-filter-button ardela" onClick={turnOptions}>
          Add Effect Filter
          <b className='ml-2'>
            {showOptions ? <BsCaretUpFill /> : <BsCaretDownFill />}
          </b>
        </Button>
        <div className='filter-fixed-bg'>
          {selectedEffects&&(
            selectedEffects.map(effectTitle => (
              <FilterOptions effectTitle={effectTitle} addEffectToFilter={addEffectToFilter}
              showX={true} removeEffectToFilter={removeEffectToFilter}  />
            ))
          )}
        </div>
      </div>
      {showOptions&&(
        <div className='filter-options d-flex flex-wrap'>
          {effectOptions
            .filter(filterEffectOptions)
            .map(effect => (
              <FilterOptions effectTitle={effect.title} addEffectToFilter={addEffectToFilter} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSelect;