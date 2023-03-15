import React, { useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import CharListItem from './Char/CharListItem';
import CharIDComponent from './Char/CharID';
import MenuComponent from './Menu';
import ComboSmilatorDesktop from './ComboSimulator/ComboSmilator';
function DesktopView({chars}) {
  const [currentChar, setCurrentChar] = useState('0001')
  const [currentMenu, setCurrentMenu] = useState('Fighters')

  return (
    <Container>
      <div className='d-none d-sm-none d-md-none d-lg-block'>
        <Row className='home-row '>
          <Col className='mr-1'>
            <MenuComponent view={'Desktop'} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            {(currentMenu === "Fighters") ? (
              <div className='d-flex flex-wrap justify-content-around 
              desktop-list-row scroll-overflow'>
                {chars.map((char) => (
                  <CharListItem char={char} setCurrentChar={setCurrentChar} currentChar={currentChar} />
                ))}
              </div>
            ) : ('')}
            {(currentMenu === "Combo Simulator") ? (
              <ComboSmilatorDesktop chars={chars} />
            ) : ('')}
          </Col>
          <Col>
            <div className='desktop-char-row scrollbar scrollbar-primary search-overflow maxvh'>
              <CharIDComponent currentChar={currentChar} />
            </div>
          </Col>
        </Row>
      </div>
  </Container>
);
}

export default DesktopView;