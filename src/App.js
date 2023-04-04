import React, {useEffect} from 'react';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import MenuComponent from './Components/Menu';
import Home from "./Components/Home";
import CharComponent from "./Components/Char/Char";
import ComboSmilator from './Components/ComboSimulator/ComboSmilator';
import BossesComponent from './Components/Bosses/BossesComponent';
import FSList from './Components/FS/FSList';

function App() {
  useEffect(() => {
    document.title = 'Street Fighter Duel Wiki';
  }, []);
  
  return (
    <div className="App">
      <div className='d-none'>Street Fighter Duel Wiki Mobile Game Fighters Information Database Images Game Rip Data Stats Survey Answers Breakdown Tier List</div>
      <MenuComponent />
      <Container className='home-row'>
        <div className='margin-main'>
          <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/char' element={<Home />} exact/>
            <Route path='/char/:id' element={<CharComponent />} exact/>
            <Route path='/combo-simulator' element={<ComboSmilator />} exact/>
            <Route path='/boss' element={<BossesComponent />} exact/>
            <Route path='/fighting-souls' element={<FSList />} exact/>
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;