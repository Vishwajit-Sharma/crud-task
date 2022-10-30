import './App.css';
import DisplayItems from './Components/DisplayItems';
import InputItems from './Components/InputItems';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import EditItems from './Components/EditItems';
import { useState } from 'react';

function App() {
  const [id, setId] = useState("")
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<DisplayItems id={id} setId={setId}/>}></Route>
        <Route path='/addItem' element={<InputItems/>}></Route>
        <Route path={`/editItem/${id}`} element={<EditItems id={id}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
