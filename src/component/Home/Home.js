import React, { useEffect } from 'react'
import { CgMouse } from 'react-icons/cg'
import './Home.css'
import './Product.js'
import Product from './Product.js'
import Metadata from '../layout.js/Metadata.js'
import { getProduct } from '../../actions/productAction.js'
import { useSelector, useDispatch } from 'react-redux'


const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
    price: "₹3000",
    id: "abhishek"
};

const Home = () => {
    const dispatch = useDispatch()

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
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </>
    )
}

export default Home
