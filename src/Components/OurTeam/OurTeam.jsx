import React, { useEffect, useState } from 'react'
// import { Header } from '../Header/Header'
import axios from 'axios';
import './OurTeam.css'
import Vaibhav from '../Assets/OurTeam/Vaibhav_Reddy_Flags_Off_Vision_Car_Rally.jpg';
import Aviator from '../Assets/OurTeam/aviator icon.png';
// import { useGetTeamQuery } from '../../features/projectSlice';
export const OurTeam = () => {

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios.get('localhost:8080/api/v1/team', {
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': '/*',
        // 'Accept-Encoding': 'gzip, deflate, br',
        // 'Connection': 'keep-alive',
        'User-Agent': 'PostmanRuntime/7.37.3'
      }
    })
    .then(response => {
      setTeamMembers(response.data);
    })
    .catch(error => {
      console.error('Error fetching team members:', error);
    });
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/v1/team' , {
  //     method: 'GET',
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       // 'Accept': '/*',
  //       // 'Accept-Encoding': 'gzip, deflate, br',
  //       // 'Connection': 'keep-alive',
  //       'User-Agent' : 'PostmanRuntime/7.37.3'
  //     }
  //   }
  //   )
  //   .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch team members');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setTeamMembers(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching team members:', error);
  //     });
  // }, []);

  console.log("teamMembers -->", teamMembers)

  const ourTeamData = [
    {
      id: 1,
      image: Vaibhav,
      name: "Vaibhav",
      role: "Co Founder",
    },
    {
      id: 2,
      image: "",
      name: "Ghusand Edits",
      role: "Graphic Designer",
    },
    {
      id: 3,
      image: Vaibhav,
      name: "Vaibhav",
      role: "Video Editor",
    },
    {
      id: 4,
      image: Vaibhav,
      name: "Vaibhav",
      role: "Script Writer",
    }
  ]
  return (
    <div className='Common-BackGround'>
      <div className="OurTeam-section">
        <div className="container">
          <h1 className='OurTeam-Heading'>Our Creative <span style={{ color: 'rgb(14, 128, 234)', }}>Team</span></h1>
          <div className="OurTeam-Container">
            {ourTeamData.map((items, index) => {
              return (
                <div className="OurTeam-Box">
                  <div className="OurTeamImage"><img className='OurteamImg' src={items?.image ? items.image : Aviator} alt={Aviator} /></div>
                  <div className="OurTeamRole">{items.role}</div>
                  <div className="OurTeamName">{items.name}</div>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </div>
  )
}
