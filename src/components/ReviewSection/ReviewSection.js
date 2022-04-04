import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import useCustomerReview from '../../Hooks/useCustomerReview';
import CustomerReview from '../CustomerReview/CustomerReview';

const ReviewSection = () => {
    const arrow = <FontAwesomeIcon icon={faAlignRight} />
    const [customers, setCusomers] = useCustomerReview();
    return (
        <div>
            <div className='row'>
                {
                    customers.map(customer => <CustomerReview
                        key={customer.id} customer={customer}
                    ></CustomerReview>)
                }

            </div>
        </div>
    );
};

export default ReviewSection;