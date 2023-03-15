import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

import Home from "./Components/Home";
import CharIDComponent from "./Components/Char/CharID";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/:id' element={<CharIDComponent />} exact/>
      </Routes>
    </div>
  );
}

export default App;
