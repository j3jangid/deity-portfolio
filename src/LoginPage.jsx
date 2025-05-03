import { Paper } from '@mui/material'
import React from 'react'
import { BsQuestionCircle } from "react-icons/bs";

function LoginPage({ userPassword, setUserPassword }) {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Paper elevation={0} className='p-5' style={{ backgroundColor: 'whitesmoke', border: '1px solid black', borderRadius: 0 }} >
                <div className='d-flex align-items-center gap-2'>
                    <input
                        type="text"
                        name=""
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder='Security Code'
                        style={{ width: '300px' }}
                    />
                    <BsQuestionCircle
                        className='fs-3'
                        title='Check Local Storage'
                        style={{ cursor: 'wait' }}
                    />
                </div>
            </Paper>
        </div>
    )
}

export default LoginPage