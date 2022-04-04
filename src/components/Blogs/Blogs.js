import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Card>
                <Card.Title>What is Context API?</Card.Title>
                <hr />
                <p>Context api is a part of React router which is taken important role to pass the data from its parents or granparents executing the code by props drilling.Its easier for the developers to pass the code by props drilling from any drinling its grand parentts or parent component.This feature is made the easiest path for the developers.
<br />
                    React.createContext()  which provides the users from its grandparents or components and helps to store the message or data.Then the users use the code without props drilling where they call the data in any component if they pass the data in their father component.So,this api creates shortest way for props drinling.</p>

            </Card>

        </div>
    );
};

export default Blogs;