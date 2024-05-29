import React from 'react'
import './Project.css'
import Desc from '../Assets/Project/projectMainImage.png'
import BrandingImage2 from '../Assets/Project/projectBranding1.png'
import BrandingImage1 from '../Assets/Project/projrctBranding2.png'
import useWindowWidrh from '../hooks/useWindowWidrh'
import { useGetProjectQuery } from '../../features/projectSlice'
export const Project = () => {
  const {data:dataProject} = useGetProjectQuery();
  const projectData = dataProject?.data;
  console.log("projectData",projectData); 
  const windowWidth = useWindowWidrh();
  return (
    <div className='Project-section'>
      <div className="Common-BackGround">
        <div className="container">
          {projectData?.map((data, index) => {
            return (
              <div>
                {((index + 1)%2)?  <div> <div className="Desc-Container">
                  <div className="ThumbnailImage-Section">
                    {windowWidth < 992 ? <div className="Desc-Section">
                      <h1 className='DescHeading'>{data.name} <span style={{ color: "rgb(14, 128, 234)" }}></span></h1>
                      <div className="Desc-Description">{data.description}</div>
                    </div>
                      : ""}
                    <div className="Desc-Image"><img className='ThumbnailImg' src={data?.image_url} alt={Desc} /></div>
                  </div>
                  {windowWidth < 992 && <div className="Desc-extraInfo py-3"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> {data.project_type}</div>}
                  {windowWidth > 992 ? <div className="Desc-Section">

                    <h1 className='DescHeading'>{data.name}<br /><span style={{ color: "rgb(14, 128, 234)" }}></span></h1>
                    <div className="Desc-Description">{data.description}</div>
                    <div className="Desc-extraInfo"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> {data.project_type}</div>
                    {windowWidth < 992 && <div className="Desc-extraInfo py-3"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> {data.project_type}</div>}
                  </div> : ""
                  }
                </div>
              </div>:<div>   
                  <div className="BrandingLogo-Container">
                  <div className="Desc-Section">
                    <h1 className='DescHeading'>{data.name} <br /><span style={{ color: "rgb(14, 128, 234)" }}></span></h1>
                    <div className="Desc-Description">{data.description}</div>
                    {windowWidth > 992 && <div className="Desc-extraInfo"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> {data.project_type}</div>}
                  </div>
                  <div className="BrandingImage-section">
                    <div className="BrandingImage1"><img src={data?.image_url} className='ThumbnailImg' alt="" /></div>
                    
                  </div>
                </div>
                </div>
                 
                }
              
                
              </div>
              
                )
          })}        
      </div>
    </div>
  </div>

  )
}
