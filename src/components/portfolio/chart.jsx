import React, { useState, useEffect } from 'react';
import {
    PieChart, Pie, Cell, Legend, LabelList
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B28DFF'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const Chart = ({currIdx, riskLevels}) => {

    const [ chartData, setChartData ] = useState([]);

    useEffect(() => {
        let newData = formatData(riskLevels[currIdx]);
        setChartData(newData)
    }, [currIdx]) 

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
                    labelLine={false}
                    label={renderCustomizedLabel}
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