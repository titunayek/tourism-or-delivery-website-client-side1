import React from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {serviceId} = useParams();
    return (
        <div className='order p-5 '>
            <h2>Orders Successfully : {serviceId}</h2>
            <button className='btn btn-info'>Remove Order</button>
        </div>
    );
};

export default Orders;