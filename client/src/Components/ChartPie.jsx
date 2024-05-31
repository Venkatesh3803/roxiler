import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ChartPie = ({ month }) => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/productcateogry?month=${month}`);
                if (res.data) {
                    setProductData(res.data)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchingProducts()
    }, [month])




    const data = productData.map((item) => {
        return (
            { name: item.category, value: item.count }
        )
    })


    return (
        <>
        <h2 className='text-xl text-center mt-2'>Pie Chart :-Products Based on Category per {month == 1 ? "Jan" : month == 2 ? "Feb" : month == 3 ? "March" : month == 4 ? "April" : month == 5 ? "May" : month == 6 ? "June" : month == 7 ? "July" : month == 8 ? "Aug" : month == 9 ? "Sept" : month == 10 ? "Oct" : month == 11 ? "Nov" : "Dec"}</h2>
            <ResponsiveContainer width="99%" height="99%">
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartPie
