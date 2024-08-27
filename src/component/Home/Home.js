import React, { useEffect } from 'react'
import { CgMouse } from 'react-icons/cg'
import './Home.css'
import './Product.js'
import Product from './Product.js'
import Metadata from '../layout.js/Metadata.js'
import { getProduct } from '../../actions/productAction.js'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    const { loading, error, products, productsCount} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <>
            <Metadata title={"ECOMMERCE"} />
            <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>

                <a href='#container'>
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className='homeHeading'>Featured Products</h2>

            <div className='container' id='container'>
                {products && products.map(product => (
                    <Product product={product} key={product._id}/>
                ))}
            </div>
        </>
    )
}

export default Home
