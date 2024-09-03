import React, { useEffect, useState } from 'react'
import "./Products.css"
import { useSelector, useDispatch } from "react-redux"
import { getProduct, clearErrors } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import { useAlert } from "react-alert"
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import { Slider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'



const Products = () => {
  const dispatch = useDispatch()
  const [ currentPage, setCurrentPage ] = useState(1)
  const { loading, error, products, productsCount, resultPerPage } = useSelector((state) => state.products)
  const alert = useAlert()
  const { keyword } = useParams()

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword, currentPage))
  }, [dispatch, alert, error, keyword, currentPage])
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <h2 className='productsHeading'>Products</h2>

          <div className='products'>
            {products && products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className='filterBox'>
            <Typography>Price</Typography>
          </div>

          {resultPerPage < productsCount && (
            <div className='paginationBox'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass='page-item'
              linkClass='page-link'
              activeClass='pageItemActive'
              activeLinkClass='pageLinkActive'
            />
          </div>
          )}
        </>
      )}
    </>
  )
}

export default Products
