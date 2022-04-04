import React, { useState, useEffect } from 'react';

const useCustomerReview = () => {

    const [customers, setCusomers] = useState([]);
    useEffect(() => {
        fetch('Customers.json').then(res => res.json()).then(data => setCusomers(data));

    }, []);

    return [customers, setCusomers];
};

export default useCustomerReview;