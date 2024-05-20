import React from 'react'
import './Home.css'
import elogo from '../Assets/homeLogo.png'
import HomeLogo from '../Assets/TextLogo.png'
import { Link } from 'react-router-dom'
import useWindowWidrh from '../hooks/useWindowWidrh'
export const Home = () => {
  const windowWidth = useWindowWidrh();
  return (
    <div className='Home-Section'>
      <div className="container ">
        <div className="HomeContent">
          <div className="Home-left">
            <div className='e-logo'><img src={elogo} alt="" /></div>
            <div className="Home-logo"><img className="homeLogoimg" src={HomeLogo} alt="" /></div>
            {windowWidth > 770 && <div className='Home-left-content'>
              <div className="Home-left-content-text">Innovate</div>
              <div className="content-dot"></div>
              <div className="Home-left-content-text">Grow</div>
              <div className="content-dot"></div>
              <div className="Home-left-content-text">Repeat</div>
            </div>}
          </div>
          <div className="Home-right">
            <div className="HomeNavbar">
              <div className="HomeNavbar-item"><Link className='HomeNavbar-item-link' to='/project'>Project</Link></div>
              <div className="HomeNavbar-item"><Link className='HomeNavbar-item-link' to='/products'>Products</Link></div>
              <div className="HomeNavbar-item"><Link className='HomeNavbar-item-link' to='/ourteam'>Our Team</Link></div>
              <div className="HomeNavbar-item"><Link className='HomeNavbar-item-link' to='/contactus'>Contact Us</Link></div>
            </div>
            {windowWidth < 770 && <div className='Home-left-content'>
              <div className="Home-left-content-text">Innovate</div>
              <div className="content-dot"></div>
              <div className="Home-left-content-text">Grow</div>
              <div className="content-dot"></div>
              <div className="Home-left-content-text">Repeat</div>
            </div>}
          </div>
          
        </div>
      </div>
    </div>
  )
}
