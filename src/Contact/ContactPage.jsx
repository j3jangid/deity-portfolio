import { Paper } from '@mui/material'
import React, { useState } from 'react'
import contactImg from '../Img/ContactUs.png'
import { CiInstagram } from 'react-icons/ci'
import { PiLinkedinLogoLight } from 'react-icons/pi'
import { FaGithub } from 'react-icons/fa'

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    function changeHandle(e) {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    function clearHandle() {
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }

    function submitHandle() {
        alert(
            `Will Add This Functionality Later
For Now Use Mobile Number or Mail ID`)
    }

    return (
        <div>
            <Paper elevation={3} sx={{ backgroundColor: 'yellow', p: 2 }}>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                            <img src={contactImg} alt="contactUs" width={300} />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div
                            className='d-flex flex-column justify-content-start align-items-center gap-3 contactBoxBorder px-5 pt-3 pb-4'
                            style={{ backgroundColor: 'gray' }}
                        >
                            <h2 className='text-center fw-bold textShadow textColor'>Drop Your Message</h2>
                            <div className='d-flex justify-content-center align-items-start' style={{ width: '100%' }}>
                                <label htmlFor="name" style={{ width: '15%' }}>Name:</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    placeholder='name'
                                    id='name'
                                    value={formData.name}
                                    onChange={changeHandle}
                                />
                            </div>
                            <div className='d-flex justify-content-start align-items-start' style={{ width: '100%' }}>
                                <label htmlFor="name" style={{ width: '15%' }}>Phone:</label>
                                <input
                                    className='form-control'
                                    type="number"
                                    placeholder='phone'
                                    id='phone'
                                    value={formData.phone}
                                    onChange={changeHandle}
                                />
                            </div>
                            <div className='d-flex justify-content-start align-items-start' style={{ width: '100%' }}>
                                <label htmlFor="name" style={{ width: '15%' }}>Email:</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    placeholder='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={changeHandle}
                                />
                            </div>
                            <div className='d-flex justify-content-start align-items-start' style={{ width: '100%' }}>
                                <label htmlFor="name" style={{ width: '15%' }}>Message:</label>
                                <textarea
                                    className='form-control'
                                    placeholder='message'
                                    id='message'
                                    value={formData.message}
                                    onChange={changeHandle}
                                />
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-2' style={{ width: '100%' }}>
                                <button className='btn btn-danger' onClick={clearHandle}>Clear</button>
                                <button className='btn btn-primary' onClick={submitHandle}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
            <Paper elevation={3} sx={{ backgroundColor: 'gray', p: 2, my: 1 }}>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h3 className='fw-bold textShadow textColor'>JATIN JANGID</h3>
                        <p>Jaipur Rajasthan India</p>
                        <a
                            href="tel:+91-9669673426"
                            className='d-flex justify-content-start align-items-center gap-3'
                        >
                            <p className='fw-bold textShadow textColor'>+91-9669673426</p>
                        </a>
                        <a
                            href="mailto:jatinjangid97@gmail.com?subject=Hello&body=Hi Jatin, I saw your portfolio..."
                            className='d-flex justify-content-start align-items-center gap-3'
                        >
                            <p className='fw-bold textShadow textColor'>jatinjangid97@gmail.com</p>
                        </a>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3 >Social Media Handles</h3>
                        <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
                            <a
                                href="https://www.instagram.com/deity_itself"
                                className='d-flex justify-content-start align-items-center gap-3'
                                target='_blank'
                                rel="noreferrer"
                            >
                                <CiInstagram className='fs-2 textColor' />
                                <p className='textColor m-0'>Instagram</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/j3-jangid"
                                className='d-flex justify-content-start align-items-center gap-3'
                                target='_blank'
                                rel="noreferrer"
                            >
                                <PiLinkedinLogoLight className='fs-2 textColor' />
                                <p className='textColor m-0'>LinkedIn</p>
                            </a>
                            <a
                                href="https://github.com/j3jangid"
                                className='d-flex justify-content-start align-items-center gap-3'
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FaGithub className='fs-2 textColor' />
                                <p className='textColor m-0'>GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default ContactPage