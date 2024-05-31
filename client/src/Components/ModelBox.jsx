import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChartPie from './ChartPie'
import ChartBar from './ChartBar'

const ModelBox = ({ setModel, year, month, setYear, setMonth }) => {
    const [monthSale, setMonthSale] = useState("")
    const [soldProduct, setSoldProduct] = useState("")
    const [unSoldProduct, setUnSoldProduct] = useState("")
    

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/monthsale?year=${year}&month=${month}`);
                if (res.data) {
                    setMonthSale(res.data)
                }
                const soldPro = await axios.get(`http://localhost:5000/api/products/soldproductpermonth?year=${year}&month=${month}`);
                if (soldPro.data) {
                    setSoldProduct(soldPro.data)
                }
                const unSoldPro = await axios.get(`http://localhost:5000/api/products/notsoldproductpermonth?year=${year}&month=${month}`);
                if (unSoldPro.data) {
                    setUnSoldProduct(unSoldPro.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchingProducts()
    }, [year, month])

    const handleCloseModel = () => {
        setModel(false)
        setMonth("");
        setYear("")
    }

    return (
        // <!-- component -->
        <>
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 w-full h-full fixed top-0 left-0 bg-[#3a36366b] flex gap-10">
                {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
                <div className="max-h-full w-full relative max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
                    <span className='absolute bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold text-lg cursor-pointer top-8 right-8' onClick={handleCloseModel}>x</span>
                    <div className="w-full">
                        <div className="m-8 my-20 max-w-[400px] mx-auto">
                            <div className="mb-8">
                                <h1 className="mb-4 text-3xl font-extrabold">Statistic - {month == 1 ? "Jan" : month == 2 ? "Feb" : month == 3 ? "March" : month == 4 ? "April" : month == 5 ? "May" : month == 6 ? "June" : month == 7 ? "July" : month == 8 ? "Aug" : month == 9 ? "Sept" : month == 10 ? "Oct" : month == 11 ? "Nov" : "Dec"}</h1>
                                <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
                            </div>
                            <div className="space-y-4 flex flex-col gap-1 w-[60%]">
                                <ul className='flex items-center justify-between text-lg font-semibold'>
                                    <li>Total Sale</li>
                                    <li>${monthSale?.totalSaleAmount?.toFixed(2)}</li>
                                </ul>
                                <ul className='flex items-center justify-between text-lg font-semibold'>
                                    <li>Total Sold items</li>
                                    <li>{soldProduct.totalproducts}</li>
                                </ul>
                                <ul className='flex items-center justify-between text-lg font-semibold'>
                                    <li>Total unsold Items</li>
                                    <li>{unSoldProduct.totalproducts}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[100%] flex flex-col bg-white rounded-2xl">
                    <ChartPie month = {month}/>
                    <ChartBar />
                </div>
            </div>
        </>
    )
}

export default ModelBox
