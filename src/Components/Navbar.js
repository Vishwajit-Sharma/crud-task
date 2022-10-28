import React from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='nav-div'>
      <h3 onClick={()=>navigate('/')}>CRUD App</h3>
      <Button variant="contained" color="secondary" endIcon={<HiUserAdd />} onClick={()=>navigate('/addItem')}>Add Item</Button>
    </div>
  )
}
