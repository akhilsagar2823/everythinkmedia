import React, { useEffect, useRef, useState } from 'react';
import './Product.css';
import GraphicImage from '../Assets/Products/graphicDesigningImage.png';
import Slider from 'react-slick';

import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useWindowWidrh from '../hooks/useWindowWidrh';

export const Products = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Set initial active slide to the first image
  const sliderRef = useRef(null);
  const windowWidth = useWindowWidrh();

  const productData = [
    {
      id: 1,
      sliderImage: GraphicImage,
      heading: "Graphic Designing",
      content: `From pixel to perfection, our design wizards will turn your ideas into visual wonders. Get ready to wow the world with eye-catching graphics that steal the spotlight.`
    },
    {
      id: 2,
      sliderImage: GraphicImage,
      heading: "Content Writing",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas explicabo optio aperiam ad in vitae quos, harum asperiores fugiat alias illo saepe quibusdam maiores qui. Ullam saepe eveniet laudantium?`
    },
    {
      id: 3,
      sliderImage: GraphicImage,
      heading: "Digital Marketing",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas explicabo optio aperiam ad in vitae quos, harum asperiores fugiat alias illo saepe quibusdam maiores qui. Ullam saepe eveniet laudantium?`
    },
    {
      id: 4,
      sliderImage: GraphicImage,
      heading: "Graphic Designing",
      content: `From pixel to perfection, our design wizards will turn your ideas into visual wonders. Get ready to wow the world with eye-catching graphics that steal the spotlight.`
    },
    {
      id: 5,
      sliderImage: GraphicImage,
      heading: "Content Writing",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas explicabo optio aperiam ad in vitae quos, harum asperiores fugiat alias illo saepe quibusdam maiores qui. Ullam saepe eveniet laudantium?`
    },
    {
      id: 6,
      sliderImage: GraphicImage,
      heading: "Digital Marketing",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas explicabo optio aperiam ad in vitae quos, harum asperiores fugiat alias illo saepe quibusdam maiores qui. Ullam saepe eveniet laudantium?`
    }
  ];
  const [pause, setPause] = useState(false);

  console.log("pause", pause);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % productData.length);
    }, 2000);

    return () => clearInterval(timer);

  }, [productData.length])
  // useEffect(() => {
  //   const handleMouseOver = () => {
  //     setPause(true);
  //   };

  //   const handleMouseOut = () => {
  //     setPause(false);
  //   };

  //   const sliderElement = sliderRef.current.innerSlider.list;
  //   sliderElement.addEventListener("mouseover", handleMouseOver);
  //   sliderElement.addEventListener("mouseout", handleMouseOut);

  //   return () => {
  //    sliderElement.removeEventListener("mouseover", handleMouseOver);
  //    sliderElement.removeEventListener("mouseout", handleMouseOut);
  //   };
  // }, []);

  // useEffect(() => {
  //   const sliderElement = sliderRef.current;
  //   if (!pause) {
  //     sliderElement.slickPlay();
  //   } else {
  //     sliderElement.slickPause();
  //   }
  // }, [pause]);

  const sliderChange = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  }

  const afterSlideChange = (index) => {
    setActiveSlide(index);
  }

  return (
    <div className='Common-BackGround'>
      <div className="container">
        <div className="Product-section">
          <div className="Product-right">
            {windowWidth > 550 && <div className="Content-slider">
              <h1>
                {productData[activeSlide]?.heading.split(' ').map((word, index) => (
                  <span key={index} style={{ color: index === 0 ? "white" : "rgb(14, 128, 234)" }}>{word} </span>
                ))}
              </h1>
              <p className='w-75 text-wrap'>{productData[activeSlide]?.content}</p>
            </div>}
          </div>
          <div className="Product-left">
            <div className="slider-container">
              {windowWidth > 550 ? <Slider {...{
                ref: sliderRef,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "0",
                slidesToShow: 3, // Display three slides at a time
                initialSlide: 0, // Set initial slide to the first image
                speed: 400,
                focusOnSelect: true,
                pauseOnHover: false,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                afterChange: afterSlideChange,
                responsive: [ // Responsive settings
                  {
                    breakpoint: 992,
                    settings: {

                      slidesToShow: 3,
                      centerPadding: "-70px",
                      className: "center",
                    }

                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      centerPadding: "8%",
                      className: "center",
                    }
                  }

                ]

              }}>
                {productData.map((item, index) => (
                  <div key={item.id} className='iconSlider'>
                    <button className='iconButton' onClick={() => sliderChange(index)}>
                      <img src={item.sliderImage} className={activeSlide === index ? "sliderImg-focused" : 'sliderImg'} alt={item.heading} />
                    </button>
                  </div>
                ))}
              </Slider> : ""}

              {windowWidth < 550 && <div className="Product-Content">
                {productData.map((item, index) => (
                  <div key={item.id} className='iconSlider'>
                    <h1 className=''>{item?.heading.split(' ').map((word, index) => (
                      <span key={index} style={{ color: index === 0 ? "white" : "rgb(14, 128, 234)" }}>{word} </span>
                    ))}</h1>
                    <p>{item?.content}</p>
                    <button className='iconButton' >
                      <img src={item.sliderImage} className={"sliderImg-focused"} alt={item.heading} />
                    </button>
                  </div>
                ))}
              </div>}
            </div>
          </div>
          
        </div>
        <div className="playButton-section">
            <div className="ButtonandText">
              <div className="playButton"><button className='playButton-btn'><FaPlay /></button></div>
              <div className="playButton-text">Before <span style={{color:"rgb(14, 128, 234)"}}>&</span> After</div>
            </div>
            <div className="playButton-extraText"><Link className='playButtonLink'> What How We Craft the Perfect Thumbnail</Link></div>
          </div>
      </div>
    </div>
  );
};
