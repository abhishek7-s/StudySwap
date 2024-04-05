import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import myContext from '../context/data/myContext'
import HeroSection from '../components/herosection/HeroSection'
import Filter from '../components/filter/Filter'
import ProductCard from '../components/productCard/ProductCard'
import Testimonial from '../components/testimonial/Testimonial'
import Track from '../components/track/Track'
import Footer from '../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'
import FilterProduct from '../components/productCard/FilterProduct'

function Home() {
  const context = useContext(myContext)
  // console.log(context) // {name: 'Abhishek sharma', rollno : 48}
  // Destructure 
  const {name , rollno} = context
  // console.log(rollno) 


  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  return (
    <Layout>
      <HeroSection/>
      {/* <Filter/>
      <FilterProduct/> */}
      <ProductCard/>
      {/* <Track/> */}
      <Testimonial/>
    </Layout>
  )
}

export default Home