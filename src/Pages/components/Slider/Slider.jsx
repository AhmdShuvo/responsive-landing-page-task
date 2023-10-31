import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file

const images = [
  'https://static8.depositphotos.com/1000939/923/i/450/depositphotos_9239571-stock-photo-hand-reaching-images-streaming-from.jpg',
  'https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg',
  'https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel" id='portfolio'>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#9664;
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button className="carousel-button next" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;