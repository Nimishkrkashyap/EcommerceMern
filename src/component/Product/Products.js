import React, { useEffect } from 'react'
import "./Products.css"
import { useSelector, useDispatch } from "react-redux"
import { getProduct, clearErrors } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import { useAlert } from "react-alert"


 
const Products = () => {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector((state) => state.products )
    const alert = useAlert()
    console.log(loading, products)

    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, alert, error])
  return (
    <>
      {loading ? <Loader /> : (
        <>
            <h2 className='productsHeading'>Products</h2>

            <div className='products'>
            {products && products.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
            </div>
        </>
      )}
    </>
  )
}

export default Products
