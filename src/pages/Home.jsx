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

function Home() {
  const context = useContext(myContext)
  // console.log(context) // {name: 'Abhishek sharma', rollno : 48}
  // Destructure 
  const {name , rollno} = context
  // console.log(rollno) 


  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem) 
  
  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }

  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
        <h1>Name : {name}</h1>
        <h1>Roll No : {rollno}</h1>
    </Layout>
  )
}

export default Home