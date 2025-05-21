import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Shop</li>
              <li>My Account</li>
              <li>My Cart</li>
              <li>Compare</li>
              <li>Wishlist</li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>Whey Protein</li>
              <li>Mass Gainer</li>
              <li>BCAA</li>
              <li>Pre-Workout</li>
              <li>Glutamine</li>
              <li>Creatine</li>
              <li>Multivitamin</li>
              <li>Omega-3</li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>Authentication</li>
              <li>New Launch</li>
              <li>Bulk Order</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Return & Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Social Network */}
          <div>
            <h4 className="font-bold mb-4">Social Network</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>WhatsApp</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          {/* Information */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>📍 Greater noida</li>
              <li>Delhi - 110014</li>
              <li>📞 +91 9310545074</li>
              <li>✉️ care@hungrynutrition.com</li>
            </ul>
          </div>
        </div>
  
      </div>

      {/* <div>
<hr />
<p className='py-10 text-sm text-center  '>Copyright 2024 @ techno.com - All Right Reserved</p>
</div>
    */}
    </footer>

    
  );
};

export default Footer;
