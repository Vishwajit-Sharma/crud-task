import React from 'react'
import './InputItems.css'
import TextField from '@mui/material/TextField';
import { FaRegAddressCard } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAdd } from '../Features/UserSlice';
import { useState } from 'react';


export default function InputItems() {



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)

    // const totalUsers = useSelector(state => state.users.items.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && username && email) {
            dispatch(userAdd({
                name: name,
                username: username,
                email: email,
            }))

            setError(null)
            navigate("/")
        }
        else {
            setError(`Fill in all fields
            `)
        }

        setName("")
        setUsername("")
        setEmail("")
    }

    return (
        <div className='input-div'>
            <h1>Add Records</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="form-row1">
                        <TextField id="outlined-basic" label="Name" variant="outlined" color='secondary' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <TextField id="outlined-basic" label="Username" variant="outlined" color='secondary' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className="form-row2">
                        <TextField id="outlined-basic" label="Email" variant="outlined" color='secondary' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-row4">
                        {error && error}
                        <button type='submit'>Submit Data &nbsp; <FaRegAddressCard /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}
