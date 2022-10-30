import React from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { fetchUsers} from '../Features/UserSlice';
import { useDispatch } from 'react-redux';

export default function Navbar() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShow = ()=>{
    dispatch(fetchUsers())
  }
  return (
    <div className='nav-div'>
      <h3 onClick={()=>navigate('/')}>CRUD App</h3>
      <div className='nav-button-div'>
      <Button variant="contained" color="success" onClick={handleShow}>Show Records</Button>
      <Button variant="contained" color="secondary" endIcon={<HiUserAdd />} onClick={()=>navigate('/addItem')}>Add Item</Button>
      </div>
      
    </div>
  )
}
