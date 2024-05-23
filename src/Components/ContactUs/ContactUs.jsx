import React, { useState } from 'react'
import './ContactUs.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { HiMail } from "react-icons/hi";
import useWindowWidrh from '../hooks/useWindowWidrh';
import { useAddContactMutation } from '../../features/contactSlice';
export const ContactUs = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    organizationName: "",
    email: "",
    contact: "",
    customerLink: "",
    lookingFor: "",
  })
  
  const [submitedData, setSubmitedData] = useState({});
  const InputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }
  
  const [newContact] = useAddContactMutation();

  const windowWidth = useWindowWidrh();
  const submitData = async(e) => {
    e.preventDefault();
    setSubmitedData(inputValue);

    let newContactObj = {
      name : inputValue.name,
      organization_name : inputValue.organizationName,
      email : inputValue.email,
      contact_no : inputValue.contact,
      description : inputValue.lookingFor,
    }
    try{
      await newContact(newContactObj);
    }
    catch(e){
      console.log(e);
    }
    setInputValue({
      name: "",
      organizationName: "",
      email: "",
      contact: "",
      customerLink: "",
      lookingFor: "",
    })
    toast.success("Submitted Successfully, We will connect you shortly");
  }
  return (
    <div className='Common-BackGround'>
      <div className='container'>
        {windowWidth < 998?<div className="Text-section py-3">
            <h1 className='Text-section-Heading'>Let's make it <br /> <span style={{ color: "rgb(14, 128, 234)" }}>a reality</span></h1>
            <div className='my-5 Text-section-text'>
              <p>We are excited to work with you soon! Please share your details & we will get back in 2-3 working days.</p>
            </div>
            <h3>Contact</h3>
            <div className="d-flex gap-2 justify-content-center align-items-center">
            <p><span style={{ color: "rgb(14, 128, 234)", fontSize:"25px" }}><HiMail /></span></p>
            <p><Link to='' className='Text-section-email'>contact@everythinkmedia.co</Link></p>
            </div>
          </div>:""}
        <div className="contactUs-Section">
          <div className="form-section">
            <form action="" onSubmit={submitData}>
              <div className="row">
                <div className="col">
                  <label htmlFor="name" className='labelText'>Your Name <span style={{ color: "rgb(14, 128, 234)" }}>*</span></label>
                  <input type="text" onChange={InputHandler} value={inputValue.name} name='name' className="Input-form" required />
                </div>
                <div className="col">
                  <label htmlFor="organizationName" className='labelText'>Your Organization Name <span style={{ color: "rgb(14, 128, 234)" }}>*</span></label>
                  <input type="text" className="Input-form" name='organizationName' onChange={InputHandler} value={inputValue.organizationName} required />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="email" className='labelText'>Your Email <span style={{ color: "rgb(14, 128, 234)" }}>*</span></label>
                  <input type="email" onChange={InputHandler} value={inputValue.email} className="Input-form" name='email' required />
                </div>
                <div className="col">
                  <label htmlFor="contact" className='labelText'>Your Contact <span style={{ color: "rgb(14, 128, 234)" }}>*</span></label>
                  <input type="text" onChange={InputHandler} value={inputValue.contact} className="Input-form" name='contact' required />
                </div>
              </div>
              <div className='mt-3'>
                <label htmlFor="customerLink" className='labelText'>Website / Social Media Link</label>
                <input type="url" onChange={InputHandler} value={inputValue.customerLink} className='Input-form' name='customerLink' placeholder='Your Website' />
              </div>
              <div className='mt-3'>
                <label htmlFor="lookingFor" className='labelText'>What are you looking for ?</label>
                <textarea className='Input-form2' onChange={InputHandler} value={inputValue.lookingFor} name='lookingFor' placeholder='Logo Design, Brand Identity...' />
              </div >
              <div className='mt-3'>
                <button className='contactus-submit'> Submit </button>
              </div>
            </form>
          </div>
          {windowWidth > 998?<div className="Text-section">
            <h1 className='Text-section-Heading'>Let's make it <br /> <span style={{ color: "rgb(14, 128, 234)" }}>a reality</span></h1>
            <div className='my-5 Text-section-text'>
              <p>We are excited to work with you soon! Please share your details & we will get back in 2-3 working days.</p>
            </div>
            <h3>Contact</h3>
            <div className="d-flex gap-2 align-items-center">
            <p><span style={{ color: "rgb(14, 128, 234)", fontSize:"25px" }}><HiMail /></span></p>
            <p><Link to='' className='Text-section-email'>contact@everythinkmedia.co</Link></p>
            </div>
          </div>:""
          }

        </div>

      </div>
    </div>
  )
}
