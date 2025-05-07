import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Navbar = lazy(() => import('./NavBar/Navbar'))
const Home = lazy(() => import('./Home/Home'))
const ResumePage = lazy(() => import('./Resume/ResumePage'))
const ContactPage = lazy(() => import('./Contact/ContactPage'))
const ProjectsPage = lazy(() => import('./Projects/ProjectsPage'))

function Layout() {
    return (
        <div>
            <Suspense fallback={<div>Loading....</div>}>
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
            </Suspense>
        </div>
    )
}

export default Layout