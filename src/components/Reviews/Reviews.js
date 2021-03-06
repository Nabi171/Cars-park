import React, { useState, useEffect } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import useCustomerReview from '../../Hooks/useCustomerReview';



const Reviews = () => {
    const arrow = <FontAwesomeIcon icon={faAlignRight} />
    const [customers, setCusomers] = useCustomerReview();
    return (
        <div>
            <div className='row'>
                {
                    customers.slice(0, 3).map(customer => <CustomerReview
                        key={customer.id} customer={customer}
                    ></CustomerReview>)
                }

            </div>
            <div>

                <Link className='btn btn-outline-danger mt-3' to='/reviewsection'>
                    SEE ALL {arrow}
                </Link>

            </div>
        </div>
    );
};

export default Reviews;