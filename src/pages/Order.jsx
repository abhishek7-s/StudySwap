import React, { useContext } from 'react'
import myContext from '../context/data/myContext'
import Layout from '../components/layout/Layout'
import Loader from '../components/loader/Loader'
import { Link } from 'react-router-dom'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context

  // console.log(order.filter(obj => obj.userid == userid).length)  //to checks user orders

  return (
    <Layout>
       {loading && <Loader />}
      {order.filter(obj => obj.userid == userid).length > 0 ?
        (<>
          <h1 className='text-xl font-bold text-black  px-5 py-5 rounded flex justify-center' style={{ color: mode === 'dark' ? 'white' : '', }}>Your Orders </h1> 

          <div className=" h-full pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order) => {
                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                          <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                              <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <div className='flex flex-col justify-center items-center h-[70vh]'>
            <h1 className='text-lg font-semibold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>You Have Not Placed Order</h1>
            <Link
              to={'/'}
              className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-teal-800 "
            >  Buy Now</Link>

          </div>
        )

      }
      
    </Layout>
  )
}

export default Order