import React, {useState, useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import { doc, onSnapshot,query, collection} from 'firebase/firestore';
import {useParams} from 'react-router-dom';
import db from '../../firebase';
import CharFactionComponent from './CharFaction';
import CharStatComponent from './CharStat';
import CharSkillComponent from './CharSkill';
import CharBondsComponent from './CharBonds';
import CharFSComponent from './CharFS';
import CharSideMenu from './CharSideMenu';
import CharSkillTxtComponent from './CharSkillTxt';

function CharComponent() {
  const id = useParams().id
  const [char, setChar] = useState([])
  const cut_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_cut.png?alt=media`

  const [chars, setChars] = useState([])

  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [chars])

  useEffect(() => {
    onSnapshot(doc(db, "/chars/", id), (doc) => {
      setChar(doc.data());
    });
  }, [id]);

  const effects = [
    {title:"Control", color: "orange", desc: "Includes Silence, Stun, Charm, and Taunt effects."},
    {title:"Armor Break", color: "orange", img:true, desc: "Decreases DEF by 3% for 15s. Stacks up to 10 times."},
    {title:"Weaken", color: "orange", img:true,desc: "Decreases ATK by 5% for 15s. Stacks up to 10 times."},
    {title:"Base chance", color:"blue", desc:"Affected by Effect Accuracy and Effect Resist."},
    {title:"base chance", color:"blue", desc:"Affected by Effect Accuracy and Effect Resist."},
    {title:"Infernal King", color:"blue", desc:"Increases DMG by 30%. Cannot receive any healing from others."},
    {title:"Saber", color:"blue", desc:"Each stack allows the fighter's attacks to ignore 7% of enemy DEF. Stacks up to 5 times and cannot be dispelled."},
    {title:"Stun", color:"orange", img:true, desc:"Cannot move, attack, or use active skills."},
    {title:"Dragonrage Curse", color:"orange", img:false},
    {title:"DMG Resist UP", color:"blue", img:true},
    {title:"Soul", color:"orange"},
    {title:"Sharpness", color:"blue"},
    {title:"Delusion", color:"orange", img:false, desc:"The target takes True DMG equal to 30% of ATK./n Removes the |Weaken| effect from the enemy target and inflicts |Stun|/n The duration of the |Stun| scales with the number of |Weaken| stacks removed"},
  ]

  const getEffect = (txt) => {
    if (effects.filter(effect => effect.title === txt)[0]) {
      const theEffect = effects.filter(effect => effect.title === txt)[0]
      if (theEffect.desc) {
        return (
          <p className='roboto'>
            <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
            {(theEffect.img&&(
              <img className='effect-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
            ))}
            <b className={`skill-color-${theEffect.color}`}>: </b>
            {theEffect.desc&&(
              <CharSkillTxtComponent effects={effects} txt={theEffect.desc} effectDesc={true} />
            )}
          </p>
        )
      }
    } else {return txt}
  }

  return (
    <Row className='custom-row'>
      <Col md={3} className='d-none d-md-block d-lg-block'>
        <CharSideMenu id={id} chars={chars} />
      </Col>
      <Col md={9} className='desktop-char-row'>
        <Row className='custom-row '>
          <Col xs={3} className="">
            <div className='char-img__bg'>
              <img src={cut_img} alt="charImg" className='char-img' />
            </div>
          </Col>
          <Col xs={9} className="">
            <div className='char-title px-2'>
              <h1 className='ardela'>{char.title}</h1>
            </div>
            <Row className='home-row'>
              <Col>
                <div>
                  <div className='d-flex justify-content-around'>
                    <CharFactionComponent label="Faction" value={char.faction} />
                    <CharFactionComponent label="Fighter Type" value={char.f_type} />
                  </div>
                  <div className='d-flex justify-content-around'>
                    <CharFactionComponent label="Fighter Class" value={char.f_class} />
                    <CharFactionComponent label="Fighting Style" value={char.f_style} />
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <CharStatComponent label="Power" value={char.power} chars={chars} id={id} />
                  <div className='d-flex justify-content-around'>
                    <CharStatComponent label="HP" value={char.HP} chars={chars} id={id} />
                    <CharStatComponent label="ATK" value={char.ATK} chars={chars} id={id} />
                  </div>
                  <div className='d-flex justify-content-around'>
                    <CharStatComponent label="DEF" value={char.DEF} chars={chars} id={id} />
                    <CharStatComponent label="SPD" value={char.SPD} chars={chars} id={id} />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='after-char-main home-row'>
          <Col lg>
            <h3 className='char-stat__bg ardela text-center mb-2'>Skills</h3>
            <CharSkillComponent effects={effects} getEffect={getEffect}
             id={id} skill={char.super} label="Super" img_n="s" />
            <CharSkillComponent effects={effects} getEffect={getEffect}
             id={id} skill={char.combo1} label="Combo" img_n="c1" />
            <CharSkillComponent effects={effects} getEffect={getEffect}
             id={id} skill={char.passive} label="Passive" img_n="p" />
            <CharSkillComponent effects={effects} getEffect={getEffect}
             id={id} skill={char.combo2} label="Combo" img_n="c2" />
          </Col>
          <Col lg>
            <h3 className='char-stat__bg ardela text-center mb-2'>Bonds</h3>
            <CharBondsComponent bond={char.bonds_char1} />
            <CharBondsComponent bond={char.bonds_char2} />
            <CharBondsComponent bond={char.bonds_char3} />
            {(!!char.bonds_char4&&(
              (!!char.bonds_char4[0]&&(
                <CharBondsComponent bond={char.bonds_char4} />
              ))
            ))}
            <h3 className='char-stat__bg ardela text-center mt-3 mb-2'>Fighting Spirit</h3>
            <CharFSComponent effects={effects} getEffect={getEffect}
            f_spirit={char.f_spirit} char_title={char.title} id={id} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CharComponent;