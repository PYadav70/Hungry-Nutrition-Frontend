import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const SupplementSlider = () => {
  const { currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    draggable: true,
    autoplay: true,           
    autoplaySpeed: 3000,      
    pauseOnHover: true,       
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to handle click and navigate to product page
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Hungry Supplement</h2>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div 
            key={index} 
            className="px-4 cursor-pointer" 
            onClick={() => handleProductClick(item._id)} // navigate on click
          >
            <div className="bg-white shadow-lg p-4">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">{currency}{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SupplementSlider;
