import React from 'react';
import { RadialBarChart, Legend, ScatterChart, CartesianGrid, XAxis, YAxis, Scatter, ZAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';

const GraphFour = () => {
    const data01 = [

        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    const data02 = [

        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];



    return (
        <div>




            <ScatterChart width={730} height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="investment" name="stature" unit="cm" />
                <YAxis dataKey="sell" name="weight" unit="kg" />
                <ZAxis dataKey="revenue" range={[64, 144]} name="score" unit="km" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="investment" data={data01} fill="#8884d8" />
                <Scatter name="revenue" data={data02} fill="#82ca9d" />
            </ScatterChart>



        </div>
    );
};

export default GraphFour;