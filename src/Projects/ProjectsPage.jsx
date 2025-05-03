import { Paper } from '@mui/material'
import React from 'react'
import posImg from '../Img/pos-min.png'
import erpImg from '../Img/ERP-min.png'
import contactImg from '../Img/contact-min.png'

function ProjectsPage() {
    return (
        <div>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <Paper elevation={3} sx={{ p: 2, backgroundColor: 'gray' }}>
                        <h3 className='fw-bold'>STONE ERP SYSTEM | WARRDEL SOLUTIONS PVT. LTD.</h3>
                        <p>
                            Developing a web-based ERP application designed to help stone suppliers manage key business functions such as purchase orders (PO), sales, product inventory, accounts, and financial tracking. The platform provides streamlined management of day-to-day operations and supports better decision-making.
                        </p>
                        <p>
                            <strong>Technologies:</strong> HTML, CSS, TypeScript, React, Node.js, MySQL, Express, Material-UI (MUI), Bootstrap etc.
                        </p>
                    </Paper>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={erpImg} alt="pos" className='img-fluid' width={200} />
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <div className='col-12 col-md-4'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={contactImg} alt="pos" className='img-fluid' width={200} />
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <Paper elevation={3} sx={{ p: 2, backgroundColor: 'yellow' }}>
                        <h3 className='fw-bold'>CONTACT MANAGEMENT APP | PRACTICE PROJECT</h3>
                        <p>
                            Developed a web application to manage customer join requests and user roles, designed as a practice project to enhance my full-stack development skills. The app includes features for client and super admin data management, allowing the super admin to upload and manage Excel files, which are then parsed and saved based on the client’s data. The app also incorporates secure login and role-based access control.
                        </p>
                        <p>
                            <strong>Technologies:</strong> HTML, CSS, JavaScript, React, Node.js, Mongoose, Express, Bootstrap.
                        </p>
                    </Paper>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <Paper elevation={3} sx={{ p: 2, backgroundColor: 'gray' }}>
                        <h3 className='fw-bold'>POS APP | PRACTICE PROJECT</h3>
                        <p>
                            Developed a Point of Sale (POS) software application focused on handling sales transactions with various features for selecting and managing items. Users can manually select items, scan barcodes, or search by item code. The system also allows for filtering items by category, name, or attributes and provides the ability to apply discounts. Additionally, users can print receipts after completing transactions. This front-end focused project was built to practice and enhance logic development and user interface creation.
                        </p>
                        <p>
                            <strong>Technologies:</strong>  HTML, CSS, JavaScript, React, Bootstrap.
                        </p>
                    </Paper>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={posImg} alt="pos" className='img-fluid' width={200} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage