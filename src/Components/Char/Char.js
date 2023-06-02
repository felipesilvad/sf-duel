import React, {useState, useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import { doc, onSnapshot,query, collection} from 'firebase/firestore';
import {useParams} from 'react-router-dom';
import db from '../../firebase';
import {effectOptions} from '../../data/data.ts';
import CharFactionComponent from './CharFaction';
import CharStatComponent from './CharStat';
import CharSkillComponent from './CharSkill';
import CharBondsComponent from './CharBonds';
import CharFSComponent from './CharFS';
import CharSideMenu from './CharSideMenu';
import CharSkillTxtComponent from './CharSkillTxt';
import AdComponent from '../Ads/AdComponent';


function CharComponent() {
  const id = useParams().id
  const [char, setChar] = useState([])
  const cut_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_cut.png?alt=media`
  const sprite = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/chars%2F${id}_sprite.png?alt=media`

  const [chars, setChars] = useState([])
  function compare( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }
  useEffect (() => {
    onSnapshot(query(collection(db, `/chars`)), (snapshot) => {
      setChars(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [])

  useEffect(() => {
    onSnapshot(doc(db, "/chars/", id), (doc) => {
      setChar(doc.data());
    });
  }, [id]);

  const getEffect = (txt) => {
    if (effectOptions.filter(effect => effect.title === txt)[0]) {
      const theEffect = effectOptions.filter(effect => effect.title === txt)[0]
      if (theEffect.desc) {
        return (
          <p className='roboto'>
            <b className={`skill-color-${theEffect.color}`}>{theEffect.title}</b>
            {(theEffect.img&&(
              <img className='effect-img' src={require(`../../Assets/effects/${theEffect.title}.png`)} alt={theEffect.title} />
            ))}
            <b className={`skill-color-${theEffect.color}`}>: </b>
            {theEffect.desc&&(
              <CharSkillTxtComponent txt={theEffect.desc} effectDesc={true} />
            )}
          </p>
        )
      }
    } else {return txt}
  }

  return (
    <Row className='custom-row'>
      <Col md={3} className='d-none d-md-block d-lg-block'>
        <CharSideMenu id={id} chars={chars.sort(compare)} />
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
              <Col lg>
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
                <div>
                  {/* <CharStatComponent label="Power" value={char.power} chars={chars} id={id} /> */}
                  <div className='d-flex justify-content-center'>
                    <CharStatComponent label="HP" value={char.HP} chars={chars} id={id} />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <CharStatComponent label="ATK" value={char.ATK} chars={chars} id={id} />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <CharStatComponent label="DEF" value={char.DEF} chars={chars} id={id} />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <CharStatComponent label="SPD" value={char.SPD} chars={chars} id={id} />
                  </div>
                </div>
              </Col>
              <Col lg>
                <Row className='home-row d-none d-lg-flex'>
                  <Col xs={4}>
                    <img src={sprite} alt={`${char.title} Sprite`} className='sprite-img' />
                  </Col>
                  <Col xs={8} className="char-subtitle-bg">
                    <h4 className='ardela mt-2'>{char.sub_title&&(char.sub_title)}</h4>
                    <p>{char.desc&&(char.desc)}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <AdComponent />

        <Row className='after-char-main home-row'>
          <Col lg>
            <h3 className='char-stat__bg ardela text-center mb-2'>Skills</h3>
            <CharSkillComponent getEffect={getEffect}
             id={id} skill={char.super} label="Super" img_n="s" />
            <CharSkillComponent getEffect={getEffect}
             id={id} skill={char.combo1} label="Combo" img_n="c1" />
            <CharSkillComponent getEffect={getEffect}
             id={id} skill={char.combo2} label="Combo" img_n="c2" />
            <CharSkillComponent getEffect={getEffect}
             id={id} skill={char.passive} label="Passive" img_n="p" />
          </Col>
          <Col lg>
            <h3 className='char-stat__bg ardela text-center mb-2'>Fighting Spirit</h3>
            <CharFSComponent getEffect={getEffect}
            f_spirit={char.f_spirit} char_title={char.title} id={id} />
            <h3 className='char-stat__bg ardela text-center mb-2 mt-3'>Bonds</h3>
            <CharBondsComponent bond={char.bonds_char1} />
            <CharBondsComponent bond={char.bonds_char2} />
            <CharBondsComponent bond={char.bonds_char3} />
            {(!!char.bonds_char4&&(
              (!!char.bonds_char4[0]&&(
                <CharBondsComponent bond={char.bonds_char4} />
              ))
            ))}
            <Row className='home-row d-lg-none d-xl-none'>
              <Col xs={4}>
                <img src={sprite} alt={`${char.title} Sprite`} className='sprite-img' />
              </Col>
              <Col xs={8} className="char-subtitle-bg">
                <h4 className='ardela mt-2'>{char.sub_title&&(char.sub_title)}</h4>
                <p>{char.desc&&(char.desc)}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CharComponent;