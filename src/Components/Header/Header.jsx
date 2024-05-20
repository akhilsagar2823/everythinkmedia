import React, { useEffect } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLinkData } from '../Redux/generalSlice';
export const Header = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const HeaderFocused = useSelector((state)=>state.general.links); 
  console.log("HeaderFocused",HeaderFocused);
  console.log("location",location);
  useEffect(()=>{
    dispatch(getLinkData(location));
  },[location]);
  return (
    <div className='Header'>
      <header>
        <nav>
          <ul className='Header-content'>
            <li className='Header-item'><Link className={HeaderFocused.project?"Header-item-Link-focused":'Header-item-Link'} to='/project'>Project</Link></li>
            <li className='Header-item'><Link className={HeaderFocused.products?"Header-item-Link-focused":'Header-item-Link'} to='/products'>Products</Link></li>
            <li className='Header-item'><Link className={HeaderFocused.ourTeam?"Header-item-Link-focused":'Header-item-Link'} to='/ourteam'>Our Team</Link></li>
            <li className='Header-item'><Link className={HeaderFocused.contactus?"Header-item-Link-focused":'Header-item-Link'} to='/contactus'>Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
