import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'
import Layout from '../../../components/layout/Layout';
function AddProduct() {
    const context = useContext(myContext);
    const {products,setProducts,addProduct} = context
    return (
        <Layout>
        <div>
            <div className=' flex justify-center items-center p-16'>
                <div className=' bg-gray-900 px-10 py-10 rounded-xl w-full p-20 flex flex-col justify-center items-center '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div className='w-full md:w-[80%] flex  justify-center items-center'>
                        <input type="text"
                            onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div className='w-full md:w-[80%] flex  justify-center items-center'>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div className='w-full md:w-[80%] flex  justify-center items-center'>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div className='w-full md:w-[80%] flex  justify-center items-center'>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div className='w-full md:w-[80%] flex  justify-center items-center'>
                       <textarea cols="30" rows="10" 
                       name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default AddProduct