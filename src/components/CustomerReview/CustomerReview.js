import React from 'react';
import { Col, Card } from 'react-bootstrap';
import '../../components/CustomerReview/CustomReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const CustomerReview = (props) => {
    const star = <FontAwesomeIcon icon={faStar} />
    const { Name, comment, Rating, imageLink } = props.customer;

    return (
        <div className='col-lg-4 col-sm-12 col-md-6 g-4 shadow'>
            <Col>
                <Card className='cards-container text-white'>
                    <Card.Img variant="top" className='img-container rounded-circle mx-auto m-2 ' src={imageLink} />
                    <Card.Body>
                        <Card.Title className='text-light'>{Name}</Card.Title>
                        <hr />
                        <Card.Text>
                            <span className='fw-bold'>Comment:</span>{comment}
                        </Card.Text>
                        <p> <span className='fw-bold'>Rattings:</span>:{Rating} <span className='fa-star'>{star}</span> </p>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default CustomerReview;