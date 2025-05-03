import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import Home from './Home/Home'
import ResumePage from './Resume/ResumePage'
import ContactPage from './Contact/ContactPage'
import ProjectsPage from './Projects/ProjectsPage'

function Layout() {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="#" Component={Home} />
                    <Route path="*" Component={Home} />
                    <Route path="/projects" Component={ProjectsPage} />
                    <Route path="/resume" Component={ResumePage} />
                    <Route path="/contact" Component={ContactPage} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout