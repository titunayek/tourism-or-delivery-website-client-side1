import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://pure-hollows-50662.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
 
    return (
        <div id='services'>
            <div className='service-con'>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;