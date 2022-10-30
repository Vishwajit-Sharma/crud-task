import React from 'react'
import TextField from '@mui/material/TextField';
import { FaRegAddressCard } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userUpdate } from '../Features/UserSlice';
import { useState } from 'react';

export default function EditItems(props) {

    const user = useSelector(state => state.users.items.find(user=>user.id===props.id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [error, setError]= useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name && username && email){
            dispatch(userUpdate({
                id: user.id,
                name: name,
                username: username,
                email: email,
            }))

            setError(null)
            navigate("/")
        }
        else{
            setError(`Fill in all fields
            `)
        }
    }

  return (
    <div className='input-div'>
            <h1>Edit Records</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="form-row1">
                        <TextField id="outlined-basic" label="Name" variant="outlined" color='secondary' value={name} onChange={(e)=>setName(e.target.value)} />
                        <TextField id="outlined-basic" label="Username" variant="outlined" color='secondary' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className="form-row2">
                        <TextField id="outlined-basic" label="Email" variant="outlined" color='secondary' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                    <div className="form-row4">
                        {error && error }
                        <button type='submit'>Save Data &nbsp; <FaRegAddressCard /></button>
                    </div>
                </div>
            </form>
        </div>
  )
}
