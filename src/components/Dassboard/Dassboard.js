import React from 'react';
import Graphone from '../GraphOne/Graphone';
import GraphTwo from '../GraphTwo/GraphTwo';
import GraphThree from '../GraphThree/GraphThree';
import GraphFour from '../Fotter/GraphFour/GraphFour';
import './Dassboard.css'


const Dassboard = () => {
    return (
        <div className='dassboard-container'>
            <h1>Dassboard</h1>
            <Graphone></Graphone>
            <GraphTwo></GraphTwo>
            <GraphThree></GraphThree>
            <GraphFour></GraphFour>
        </div>
    );
};

export default Dassboard;