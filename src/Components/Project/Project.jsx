import React from 'react'
import './Project.css'
import Desc from '../Assets/Project/projectMainImage.png'
import BrandingImage2 from '../Assets/Project/projectBranding1.png'
import BrandingImage1 from '../Assets/Project/projrctBranding2.png'
import useWindowWidrh from '../hooks/useWindowWidrh'
export const Project = () => {
  const windowWidth = useWindowWidrh();
  return (
    <div className='Project-section'>
      <div className="Common-BackGround">
        <div className="container">
          <div className="Desc-Container">
            <div className="ThumbnailImage-Section">
              {windowWidth < 992 ? <div className="Desc-Section">
              <h1 className='DescHeading'>Thumbnail <span style={{ color: "rgb(14, 128, 234)" }}>Design</span></h1>
              <div className="Desc-Description">Let us craft your perfect Desc to captivate your audience at first glance. Our team will ensure your content stands out</div>
            </div> 
            : ""}
              <div className="Desc-Image"><img className='ThumbnailImg' src={Desc} alt={Desc} /></div>
              <div className="Thumbnail-Info">
                <p>Youtube / Desi Games</p>
                <p>11 Million Views</p>
                <p>12.5% CTR</p>
              </div>
            </div>
            {windowWidth < 992 && <div className="Desc-extraInfo py-3"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> Avg Ctr from Desc we make is 10% effective</div>}
            {windowWidth > 992 ? <div className="Desc-Section">
            
              <h1 className='DescHeading'>Thumbnail <br /><span style={{ color: "rgb(14, 128, 234)" }}>Design</span></h1>
              <div className="Desc-Description">Let us craft your perfect Desc to captivate your audience at first glance. Our team will ensure your content stands out</div>
              <div className="Desc-extraInfo"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> Avg Ctr from Desc we make is 10% effective</div>
            </div>: ""
            }
          </div>
          <div className="BrandingLogo-Container">
            <div className="Desc-Section">
              <h1 className='DescHeading'>Branding <br /><span style={{ color: "rgb(14, 128, 234)" }}>Logo Design</span></h1>
              <div className="Desc-Description">Let us craft your perfect Branding Logo to captivate your audience at first glance. Our team will ensure your content stands out</div>
              {windowWidth > 992 && <div className="Desc-extraInfo"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> Avg Ctr from Branding Logo we make is 10% effective</div>}
            </div>
            <div className="BrandingImage-section">
              <div className="BrandingImage1"><img src={BrandingImage1} className='ThumbnailImg' alt="" /></div>
              <div className="BrandingImage2"><img src={BrandingImage2} className='ThumbnailImg' alt="" /></div>
            </div>
            {windowWidth < 992 && <div className="Desc-extraInfo py-3"><span style={{ color: "rgb(14, 128, 234)" }}>Did you know ?</span> <br /> Avg Ctr from Branding Logo we make is 10% effective</div>}
          </div>
        </div>
      </div>
    </div>

  )
}
