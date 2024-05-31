import React, { useEffect, useState } from 'react'
import Navber from '../Components/Navber'
import Table from '../Components/Table'
import axios from "axios"

const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products?page=${page}`);
                if (res.data) {
                    setData(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchingProducts()
    }, [page])



    return (
        <>
            <Navber />
            <div className='py-20'>
                <Table data={data} setPage={setPage} page={page} />
            </div>
        </>
    )
}

export default HomePage
