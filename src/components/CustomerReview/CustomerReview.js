import React from 'react';
import { Col, Card } from 'react-bootstrap';
import '../../components/CustomerReview/CustomReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const CustomerReview = (props) => {
    const star = <FontAwesomeIcon icon={faStar} />
    const { Name, comment, Rating } = props.customer;

    return (
        <div className='col-lg-4 col-sm-12 col-md-6 g-4 '>
            <Col>
                <Card className='cards-container text-white'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <hr />
                        <Card.Text>
                            Comment:{comment}
                        </Card.Text>
                        <p>Ratting:{Rating} <span className='fa-star'>{star}</span> </p>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default CustomerReview;