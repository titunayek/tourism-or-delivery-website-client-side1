import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banar = () => {
    return (
        <>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-vector/online-delivery-service-concept-perfect-260nw-1730034208.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/001/664/520/non_2x/safe-food-delivery-concept-banner-vector.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfV7vaklbClkNGYAukKVUqgxrTWnC_RrJ6A&usqp=CAU"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


        </>
    );
};

export default Banar;