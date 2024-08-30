import React, { useEffect } from 'react'
import './ProductDetails.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import Carousel from 'react-material-ui-carousel'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading, product, error } = useSelector((state) => state.productDetails)

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <>
            <div className='productDetails'>
                <div>
                    <Carousel>
                        {product.images && product.images.map((item, i) => (
                            <img
                                className='carouselImage'
                                key={i}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
                        ))}
                    </Carousel>
                </div>

                <div>
                    <div className='detailsBlock-1'>
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    <div className='detailsBlock-2'>
                        <ReactStars {...options} />
                        <span>({product.numOfReviews} Reviews)</span>
                    </div>
                    <div className='detailsBlock-3'>
                        <h1>{`${product.price}`}</h1>
                        <div className='detailsBlock-3-1'>
                            <div className='detailsBlock-3-1-1'>
                                <button>-</button>
                                <input value="1" type='number' />
                                <button>+</button>
                            </div>
                            <button>Add to Cart</button>
                        </div>
                        <p>
                            Status : 
                            <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                {product.stock < 1 ? "OutOfStock" : "InStock"}
                            </b>
                        </p>
                    </div>
                    <div className='detailsBlock-4'>
                        Description : <p>{product.description}</p>
                    </div>
                    <button className='submitReview'>Submit Review</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
