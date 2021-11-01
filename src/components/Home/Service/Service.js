import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, img,description,price,or} = props.service;
    return (
        <div className='services pb-5'>
            <img className='img' src={img} alt=''/>
            <h2>Service name : {name}</h2>
            <h4>Price: {price}</h4>
            <h5> {description}</h5>

            <Link to={`/login/${or}`}>
               <button className='btn btn-warning'>Order Place</button>
            </Link>
        </div>
    );
};

export default Service;