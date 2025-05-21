import React from "react";
import { assets } from "../assets/assets";

const Card= () => {
  return (
    <div className="bg-black  text-white ">
      <div className="container mx-auto px-4 py-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
         
          <div className="bg-white text-black rounded-lg shadow-md flex items-center p-4">
            <img
              src={assets.delivery_truck} 
              alt="Free Shipping"
              className="w-10 h-10 mr-4"
            />
            <div>
              <h4 className="font-bold">FREE SHIPPING</h4>
              <p className="text-sm">From all orders over ₹2999/-</p>
            </div>
          </div>
        
          <div className="bg-white text-black rounded-lg shadow-md flex items-center p-4">
            <img
              src={assets.investment} 
              alt="Free Returns"
              className="w-10 h-10 mr-4"
            />
            <div>
              <h4 className="font-bold">FREE RETURNS</h4>
              <p className="text-sm">Return money within 30 days</p>
            </div>
          </div>
         
          <div className="bg-white text-black rounded-lg shadow-md flex items-center p-4">
            <img
              src={assets.shield} 
              alt="Secure Shopping"
              className="w-10 h-10 mr-4"
            />
            <div>
              <h4 className="font-bold">SECURE SHOPPING</h4>
              <p className="text-sm">You’re in safe hands</p>
            </div>
          </div>
        
          <div className="bg-white text-black rounded-lg shadow-md flex items-center p-4">
            <img
              src={assets.customer_service} 
              alt="Helpline Support"
              className="w-10 h-10 mr-4"
            />
            <div>
              <h4 className="font-bold">HELPLINE SUPPORT</h4>
              <p className="text-sm">We have everything you need</p>
            </div>
          </div>
        </div>
        
        <div className=" text-center  ">
          <h3 className="text-xl font-bold mb-4 gap-15">AUTHENTICATE YOUR PRODUCT NOW</h3>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md">
            AUTHENTICATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card
