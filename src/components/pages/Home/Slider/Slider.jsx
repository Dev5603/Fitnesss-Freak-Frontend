import React, { useEffect, useRef, useState } from 'react'
import './Slider.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import img1 from '../../../../assets/images/client/client1.png'
import img2 from '../../../../assets/images/client/client4.png'
import img3 from '../../../../assets/images/client/client3.png'
import img4 from '../../../../assets/images/services.png'
import img5 from '../../../../assets/images/staff/staff1.png'
import img6 from '../../../../assets/images/staff/staff4.png'
import img7 from '../../../../assets/images/staff/staff3.png'
import img8 from '../../../../assets/images/staff/staff2.png'
import img9 from '../../../../assets/images/gym/gym3.png'
import img10 from '../../../../assets/images/gym/gym2.png'
import img11 from '../../../../assets/images/gym/gym1.png'
import img12 from '../../../../assets/images/gym/gym4.png'

const Slider = () => {
  // State to keep track of the active index (for both items and thumbnails)
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useRef([]);
  const thumbnails = useRef([]);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const intervalId = useRef(null);

  const countItem = items.current.length;

  // Function to show the current active item and thumbnail
  const showSlider = () => {
    // Remove active class from previous active items
    const thumbnailActiveOld = thumbnails.current.find(thumbnail => thumbnail.classList.contains('active'));
    const itemActiveOld = items.current.find(item => item.classList.contains('active'));
    
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');

    // Add active class to the new active items
    thumbnails.current[activeIndex].classList.add('active');
    items.current[activeIndex].classList.add('active');
  };

  // Function to handle prev button click
  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? countItem - 1 : prevIndex - 1));
  };

  // Function to handle next button click
  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === countItem - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  // Reset the interval on mount and whenever activeIndex changes
  useEffect(() => {
    // Initialize the interval on mount
    intervalId.current = setInterval(() => {
      handleNext(); // Auto slide to the next item
    }, 5000);

    // Cleanup the interval on unmount
    return () => {
      clearInterval(intervalId.current);
    };
  }, [activeIndex]);

  // Show the active item when the activeIndex changes
  useEffect(() => {
    if (countItem > 0) {
      showSlider();
    }
  }, [activeIndex, countItem]);

  return (
    <>
      <section className='slider'>
        <div>
          <div>
            <h2>Glimpses</h2>
            <p>One place for all your glimpses</p>
          </div>

          <div className='arrows'>
            <button id='prev' ref={prevBtn} onClick={handlePrev}>
              <i><FaAngleLeft /></i>
            </button>
            <button id='next' ref={nextBtn} onClick={handleNext}>
              <i><FaAngleRight /></i>
            </button>
          </div>

          <div>
            <div className='thumbnail'>
              <a className={`item ${activeIndex === 0 ? 'active' : ''}`} ref={(el) => (thumbnails.current[0] = el)} onClick={() => handleThumbnailClick(0)}>
                Client Photos
              </a>
              <a className={`item ${activeIndex === 1 ? 'active' : ''}`} ref={(el) => (thumbnails.current[1] = el)} onClick={() => handleThumbnailClick(1)}>
                Staff Photos
              </a>
              <a className={`item ${activeIndex === 2 ? 'active' : ''}`} ref={(el) => (thumbnails.current[2] = el)} onClick={() => handleThumbnailClick(2)}>
                Gym Photos
              </a>
            </div>

            <div className='list'>
              <div className={`item ${activeIndex === 0 ? 'active' : ''}`} ref={(el) => (items.current[0] = el)}>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
              </div>

              <div className={`item ${activeIndex === 1 ? 'active' : ''}`} ref={(el) => (items.current[1] = el)}>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
                <img src={img7} alt=""/>
                <img src={img8} alt=""/>
              </div>

              <div className={`item ${activeIndex === 2 ? 'active' : ''}`} ref={(el) => (items.current[2] = el)}>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
                <img src={img11} alt=""/>
                <img src={img12} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;