import React, { useState, useEffect } from 'react';
import {
    PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B28DFF'];


export const Chart = ({data}) => {

    const [ chartData, setChartData ] = useState([]);

    useEffect(() => {
        let newData = formatData(data);
        setChartData(newData)
    }, []) 

    const formatData = (d) => {
        let res = [];

        for(let k in d) {
            res.push({name: k, value: d[k] * 100})
        } 
        return res;
    }
  
    return (
        <div className='chart-container'>
            <PieChart width={700} height={400} >
                <Pie
                    data={chartData}
                    cx={350}
                    cy={200}
                    innerRadius={50}
                    outerRadius={150}
                    label= "name"
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {
                        chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Legend verticalAlign="top" height={10}></Legend>
            </PieChart>
        </div>
    );
}