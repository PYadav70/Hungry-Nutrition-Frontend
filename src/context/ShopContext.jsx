import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : {};
  });
  const navigate = useNavigate();

  const [products, setProducts] = useState([])
  const [token, setToken] = useState("")  // storing token into state variable

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart by itemId only (no size)
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  // Get total amount in cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
    return totalAmount;
  };

  // Get total count of items in cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        totalCount += quantity;
      }
    }
    return totalCount;
  };

  // Update quantity for item in cart
  const updateQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] !== undefined) {
      cartData[itemId] = quantity;
      setCartItems(cartData);
    } else {
      toast.error('Item not found in cart');
    }
  };

  // getting dynamic product data through api
 const getProductsData = async ()=>{
  try {
    
    const response = await axios.get(backendUrl + "/api/product/list")
    if(response.data.success){
       setProducts(response.data.products);
    }else{
      toast.error(response.data.message)
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message)
    
  }
 }
 useEffect(()=>{
  getProductsData();
 },[])

 useEffect(()=>{
  if (!token && localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
  }
 },[])
 
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
