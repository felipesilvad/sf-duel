import React, {useEffect} from 'react';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import MenuComponent from './Components/Menu';
import Home from "./Components/Home";
import CharComponent from "./Components/Char/Char";
import ComboSmilator from './Components/ComboSimulator/ComboSmilator';

function App() {
  useEffect(() => {
    document.title = 'Street Fighter Duel Wiki';
  }, []);
  return (
    <div className="App">
      <MenuComponent />
      <Container className='home-row'>
        <div className='margin-main'>
          <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/char/:id' element={<CharComponent />} exact/>
            <Route path='/combo-simulator' element={<ComboSmilator />} exact/>
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;