import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPath = useLocation()?.pathname?.split('/')[1];
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = (event) => {
        console.log('event', event);

        if (event.button === 0) {
            setIsRotated((prev) => !prev);
        }
    };
    const handleMouseUp = () => {
        setIsRotated(false); // Revert on mouse up
    };
    return (
        <div onMouseUp={handleMouseUp}>
            <div
                className='d-flex justify-content-center align-items-center gap-3 p-3 mb-1 flex-wrap '
                style={{ backgroundColor: '#ffbf00', boxShadow: '0px 0px 10px #000000', minHeight: '60px' }}>
                <Link
                    to={'/'}
                    className={`cursorStyle ${isRotated ? 'rotated' : ''} text-decoration-none`}
                    onMouseDown={toggleRotation}
                    name='home'
                >
                    <div className={`px-3 py-2 navBtnHover navBtn ${currentPath === '' ? 'navBtnSelectedBg' : ''}`}>
                        Home
                    </div>
                </Link>
                <Link
                    to={'/projects'}
                    className={`cursorStyle ${isRotated ? 'rotated' : ''}  text-decoration-none `}
                    onMouseDown={toggleRotation}
                    name='projects'
                >
                    <div className={`px-3 py-2 navBtnHover navBtn ${currentPath === 'projects' ? 'navBtnSelectedBg' : ''}`}>
                        Projects
                    </div>
                </Link>
                <Link
                    to={'/resume'}
                    className={`cursorStyle ${isRotated ? 'rotated' : ''}  text-decoration-none`}
                    onMouseDown={toggleRotation}
                    name='resume'
                >
                    <div className={`px-3 py-2 navBtnHover navBtn ${currentPath === 'resume' ? 'navBtnSelectedBg' : ''}`}>
                        Resume
                    </div>
                </Link>

                <Link
                    to={'/contact'}
                    className={`cursorStyle ${isRotated ? 'rotated' : ''}  text-decoration-none`}
                    onMouseDown={toggleRotation}
                    name='contact'
                >
                    <div className={`px-3 py-2 navBtnHover navBtn ${currentPath === 'contact' ? 'navBtnSelectedBg' : ''}`}>
                        Contact-Me
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
