import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Card/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home