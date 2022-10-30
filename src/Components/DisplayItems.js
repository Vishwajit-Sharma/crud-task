import React from 'react'
import './DisplayItems.css'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { userDelete } from '../Features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DisplayItems(props){

  const dispatch = useDispatch()
  const {items} = useSelector(state => state.users)
  const loading = useSelector(state => state.loading)

  const navigate= useNavigate()

  const handleEdit = (id)=>{
    props.setId(id)
    navigate(`/editItem/${id}`)
  }

  const handleDelete = (id)=>{
    dispatch(userDelete({id}))
  }


  return (

    <div className='display-div'>

        {   
            loading ? ("Loading ... "):
            items.map((item,index) => 
            <div className='item-box' key={index}>
                <h2>Name: {item.name}</h2>
                <h3>Username: {item.username}</h3>
                <h5>Email: {item.email}</h5>
                <div className='crud'> <span className='edit' onClick={()=>handleEdit(item.id)}><FiEdit/></span> <span className='delete' onClick={()=>handleDelete(item.id)}><RiDeleteBin5Line/></span></div>
            </div>
            )
        }
    </div>
  )
}


