import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';


const ShowlineChart = (props) => {
    const { sell, investment } = props.customData;
    console.log(props.customData)

    return (
        <LineChart width={600} height={300} data={props}>
            <Line dataKey="sell" />

            <XAxis dataKey={props.customDatas.investment} />
            <YAxis dataKey={` ${sell} `} />
        </LineChart>
    );
};

export default ShowlineChart;