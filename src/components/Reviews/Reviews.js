import React, { useState, useEffect } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'



const Reviews = () => {
    const arrow = <FontAwesomeIcon icon={faAlignRight} />
    const [customers, setCusomers] = useState([]);
    useEffect(() => {
        fetch('Customers.json').then(res => res.json()).then(data => setCusomers(data));

    }, [])
    return (
        <div>
            <div className='row'>
                {
                    customers.map(customer => <CustomerReview
                        key={customer.id} customer={customer}
                    ></CustomerReview>)
                }

            </div>
            <div>

                <Link className='btn btn-outline-danger mt-3' to='/reviews'>
                    SEE ALL {arrow}
                </Link>

            </div>
        </div>
    );
};

export default Reviews;