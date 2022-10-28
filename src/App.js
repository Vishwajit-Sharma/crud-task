import './App.css';
import DisplayItems from './Components/DisplayItems';
import InputItems from './Components/InputItems';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<DisplayItems/>}></Route>
        <Route path='/addItem' element={<InputItems/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
