import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

import Home from "./Components/Home";
import CharComponent from "./Components/Char/Char";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/:id' element={<CharComponent />} exact/>
      </Routes>
    </div>
  );
}

export default App;
