import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';

const SearchToggleButton = () => {
  const { showSearch, setShowSearch } = useContext(ShopContext);

  return (
    <button 
      onClick={() => setShowSearch(!showSearch)} 
      aria-label="Toggle Search Bar"
      className="mb-4 px-4 py-2 border rounded hover:bg-gray-200 flex items-center gap-2"
    >
      <img src={assets.search_icon} alt="Search" className="w-5 h-5" />
      {showSearch ? 'Hide Search' : 'Show Search'}
    </button>
  );
};

const Shop = () => {
  const {products, search, showSearch}= useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=> item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0) {
      productsCopy = productsCopy.filter(item  => category.includes(item.category));
    }

    if(subCategory.length>0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy)
  }

  const sortProduct = () =>{
    let filterProductCopy = filterProduct.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProduct(filterProductCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProduct(filterProductCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=> {
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=> {
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Search toggle & Search bar */}
      <div className="w-full sm:w-auto">
        <SearchToggleButton />
        <SearchBar />
      </div>

      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Glutamine'} onChange={toggleCategory} /> Glutamine
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Creatine'} onChange={toggleCategory}  /> Creatine
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Uncategorized'} onChange={toggleCategory} /> EAA+
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hungry Mass'} onChange={toggleCategory}  /> Hungry Mass
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Pre Workout'} onChange={toggleCategory}  /> Pre Workout
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hungry Whey'} onChange={toggleCategory}  /> Hungry Whey
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hungry Multivitamin'} onChange={toggleCategory}  /> Hungry Multivitamin
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hungry Omega-3'} onChange={toggleCategory}  /> Hungry Omega-3
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-14'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>

        {/* mapping the product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index)=> (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop;
