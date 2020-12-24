import React from 'react';
import {
    PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B28DFF'];


export const Chart = ({data}) => {

    const formatData = (d) => {
        let res = [];

        for(let k in d) {
            res.push({name: k, value: d[k]})
        } 
        return res;
    }
  
    return (
        <div className='chart-container'>
            <PieChart width={700} height={400} >
                <Pie
                    data={formatData(data)}
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
                        formatData(data).map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Legend verticalAlign="top" height={10}></Legend>
            </PieChart>
        </div>
    );
}