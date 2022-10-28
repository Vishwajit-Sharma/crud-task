import React from 'react'
import './InputItems.css'
import TextField from '@mui/material/TextField';
import { FaRegAddressCard } from "react-icons/fa";

export default function InputItems() {
    return (
        <div className='input-div'>
            <h1>Add Records</h1>
            <form action="">
                <div className="form-div">
                    <div className="form-row1">
                        <TextField id="outlined-basic" label="Name" variant="outlined" color='secondary' />
                        <TextField id="outlined-basic" label="Username" variant="outlined" color='secondary' />
                    </div>
                    <div className="form-row2">
                        <TextField id="outlined-basic" label="Email" variant="outlined" color='secondary' />
                    </div>
                    <div className="form-row3">
                        <TextField id="outlined-basic" label="City" variant="outlined" color='secondary' />
                        <TextField id="outlined-basic" label="Company" variant="outlined" color='secondary' />
                    </div>
                    <div className="form-row4">
                        <button type='submit'>Submit Data &nbsp; <FaRegAddressCard /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}
