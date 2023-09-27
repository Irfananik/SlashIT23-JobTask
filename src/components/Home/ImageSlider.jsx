import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "https://i.ibb.co/VTvHxB1/image1.jpg",
  "https://i.ibb.co/Xp8BGjq/image2.jpg",
  "https://i.ibb.co/6RmfsKR/image3.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image or loop back to the first image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval (in milliseconds) for autoplay here

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider flex items-center justify-center slider-bg-color py-6">
      <button className="" onClick={prevSlide}><span className="text-slate-50">Previous</span></button>
      <img className="rounded-md" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="" onClick={nextSlide}><span className="text-slate-50">Next</span></button>
    </div>
  );
};

export default ImageSlider;
