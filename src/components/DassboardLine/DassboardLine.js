import React, { useState, useEffect } from 'react';
import ShowlineChart from '../ShowlineChart/ShowlineChart';


const DassboardLine = () => {
    const [customDatas, setCustomData] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setCustomData(data))

    }, [])

    return (
        <div>
            {
                customDatas.map(customData =>
                    <ShowlineChart
                        customData={customData}
                    ></ShowlineChart>
                )
            }
        </div>
    );
};

export default DassboardLine;


