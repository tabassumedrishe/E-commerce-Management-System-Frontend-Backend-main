import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import "../assets/css/ProductCarousel.css";
import Slider1 from "../assets/images/banner_1.jpg";
import Slider2 from "../assets/images/banner_2.jpg";
import Slider3 from "../assets/images/banner_3.jpg";
import Slider4 from "../assets/images/banner_4.jpg";
import six from "../assets/images/banner_5.jpg";
import eight from "../assets/images/banner_8.jpg";
import nine from "../assets/images/banner_9.jpg";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={Slider1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={Slider2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={Slider3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={Slider4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={eight} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={nine} alt="Third slide" />
      </Carousel.Item>
   
    </Carousel>

    // <Carousel pause="hover" className="carousel">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} (${product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
  );
};

export default ProductCarousel;
