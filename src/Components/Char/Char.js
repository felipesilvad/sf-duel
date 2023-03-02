import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import CharFactionComponent from './CharFaction';
import CutImg from '../../Assets/cut.png'
import master from '../../Assets/master.png'

function CharComponent() {
  return (
    <Container>
      <Row className='custom-row'>
        <Col xs={3} className="">
          <img src={CutImg} alt="charImg" className='char-img' />
        </Col>
        <Col xs={9} className="">
          <div className='char-title px-2'>
            <h1>Ken</h1>
          </div>
          <CharFactionComponent label="Faction" value="Flame" />
          <CharFactionComponent label="Fighter Type" value="Agility" />
          <CharFactionComponent label="Fighter Class" value="Balanced" />
          <CharFactionComponent label="Fighting Style" value="Military Combat +25 ATK" />
        </Col>
      </Row>
    </Container>
  );
}

export default CharComponent;