import React, { useEffect, useState } from 'react'
// import { Header } from '../Header/Header'
import axios from 'axios';
import './OurTeam.css'
import Aviator from '../Assets/OurTeam/aviator icon.png';
import { useGetTeamQuery } from '../../features/teamSlice';
export const OurTeam = () => {

  const {data:teamMembers} = useGetTeamQuery();


  const ourTeamData = teamMembers?.data;

  return (
    <div className='Common-BackGround'>
      <div className="OurTeam-section">
        <div className="container">
          <h1 className='OurTeam-Heading'>Our Creative <span style={{ color: 'rgb(14, 128, 234)', }}>Team</span></h1>
          <div className="OurTeam-Container">
            {ourTeamData?.map((items, index) => {
              // const backgroundImageUrl = ;
              console.log(items?.image_url);
              return (
                <div className="OurTeam-Box" key={index}>
                  <div className="OurTeamImage" >
                    <img className='OurteamImg' src={items?.image_url? items?.image_url : Aviator} alt={items?.about}/></div>
                  <div className="OurTeamRole">{items?.designation}</div>
                  <div className="OurTeamName">{items?.name}</div>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </div>
  )
}