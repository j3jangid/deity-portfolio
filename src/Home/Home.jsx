import { Paper } from '@mui/material'
import React from 'react'
import { CiInstagram } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { PiLinkedinLogoLight } from 'react-icons/pi'
import myImg from '../Img/IMG20230324102848.png'

import jsImg from '../Img/js.png'
import tsImg from '../Img/typescript.png'
import reactImg from '../Img/physics.png'
import nodeImg from '../Img/nodejs.png'
import sqlImg from '../Img/sql-server.png'
import bootstrapImg from '../Img/bootstrap.png'
import javaImg from '../Img/java.png'
import gitImg from '../Img/git.png'


function Home() {
  return (
    <div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12 col-md-6 p-0">
            <div
              className='d-flex justify-content-center flex-column align-items-center p-3'
              style={{ backgroundColor: 'gray', height: '100%' }}
            >
              <h1>Welcome Welcome</h1>
              <h1>स्वागत है आपका</h1>
              <h2>I am <span className='textColor textShadow'>JATIN JANGID</span> - (<span className='fs-4 textColor textShadow'>Full Stack Developer</span>)</h2>
              <p>This is my simple portfolio.</p>
              <p>Feel free to explore my projects and resume.</p>
              <div className='d-flex justify-content-center align-items-center gap-3'>
                <a href="https://www.instagram.com/deity_itself" target='_blank' rel="noreferrer">
                  <CiInstagram className='fs-2 textColor' />
                </a>
                <a href="https://www.linkedin.com/in/j3-jangid" target='_blank' rel="noreferrer">
                  <PiLinkedinLogoLight className='fs-2 textColor' />
                </a>
                <a href="https://github.com/j3jangid" target='_blank' rel="noreferrer">
                  <FaGithub className='fs-2 textColor' />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0 myImgCardBg">
            <div className='d-flex justify-content-center flex-column align-items-center'>
              <img
                src={myImg}
                alt="Foto"
                className="img-fluid rounded-pill p-4"
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className='my-2 mx-2'>
        <Paper elevation={5} sx={{ mt: 1, backgroundColor: '#D3D3D3', p: 2 }} >
          <h2 className='text-center textColor textShadow'>About Me</h2>
          <p className='text-center mt-4'>
            Hey! I'm Jatin Jangid, a full stack developer from Jaipur, Rajasthan. I enjoy creating websites and web apps that are easy to use and work smoothly. I’ve worked with a variety of tools like React, JavaScript, TypeScript, Node.js, MySQL, MongoDB, and I’m always looking to learn more.
          </p>
          <hr />
          <p className='text-center mt-3'>
            Recently I’ve worked on was an ERP system for the stone industry. It included everything from handling purchase orders and sales to tracking inventory and finances. I was responsible for building the user interface using React and Material-UI, writing backend APIs with Node.js and Express, and managing the database in MySQL. It really helped me grow as a full stack developer and learn how to build something useful for real businesses.
          </p>
          <hr />
          <p className='text-center mt-3'>
            Along the way, I’ve also built things like a contact management app, a POS system and Few Websites — all hands-on projects that taught me a lot about building, testing, and improving web apps from start to finish.
          </p>
          <hr />
          <p className='text-center mt-3'>
            Besides coding, I’ve got experience with Git, Java (Core & Advanced), React Native, Electron, VS Code, Eclipse, IntelliJ, and Jira. My past roles in sales and team leadership also taught me how to work with people, manage responsibilities, and stay organized.
          </p>
          <hr />
          <p className='text-center mt-3'>
            Right now, I’m focused on leveling up my skills, building new things, and working with people who love tech as much as I do.
          </p>
        </Paper>
      </div>

      {/* Skills Section */}
      <div className='my-2 mx-2'>
        <Paper elevation={0} sx={{ mt: 1, backgroundColor: 'gray', p: 2 }} >
          <h2 className='text-center textColor'>Skills</h2>
          <div className='d-flex justify-content-center align-items-center gap-5 mt-5 flex-wrap'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={jsImg} alt="javaScript" />
              <p className='mt-2 textColor'>
                Java Script
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={tsImg} alt="typeScript" />
              <p className='mt-2 textColor'>
                Type Script
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={reactImg} alt="react.js" />
              <p className='mt-2 textColor'>
                React.JS
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={nodeImg} alt="node.js" />
              <p className='mt-2 textColor'>
                Node.JS
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={sqlImg} alt="sql" />
              <p className='mt-2 textColor'>
                SQL
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={bootstrapImg} alt="bootstrap" />
              <p className='mt-2 textColor'>
                Bootstrap
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={javaImg} alt="java" />
              <p className='mt-2 textColor'>
                Java
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='img-fluid skillImg' src={gitImg} alt="git" />
              <p className='mt-2 textColor'>
                Git
              </p>
            </div>

          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Home