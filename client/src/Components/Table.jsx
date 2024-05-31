import React, { useEffect, useState } from 'react'
import ModelBox from './ModelBox'
import TableData from './TableData'

const Table = ({ data, setPage, page }) => {

    const [model, setModel] = useState(false)
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")




    useEffect(() => {
        if (year !== "" && month !== "") {
            setModel(true)
        }
    }, [month, year])

    return (
        <>
            <div className="flex flex-wrap  mb-5 w-[80%] m-auto">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            {/* <!-- card header --> */}
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Search Transaction</span>
                                    {/* <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span> */}
                                </h3>
                                <div className="relative flex flex-wrap items-center my-2">
                                    <select name="year" id="" className='border px-10 py-2 rounded-lg border-gray-500 cursor-pointer' value={year} onChange={(e) => setYear(e.target.value)}>
                                        <option value="">Select year</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                    <select name="month" id="" className='border px-10 py-2 rounded-lg border-gray-500 cursor-pointer' value={month} onChange={(e) => setMonth(e.target.value)}>
                                        <option value="">Select Month</option>
                                        <option value={"1"}>Jan</option>
                                        <option value={"2"}>Feb</option>
                                        <option value={"2"}>March</option>
                                        <option value={"4"}>April</option>
                                        <option value={"5"}>May</option>
                                        <option value={"6"}>June</option>
                                        <option value={"7"}>July</option>
                                        <option value={"8"}>Aug</option>
                                        <option value={"9"}>Sept</option>
                                        <option value={"10"}>Oct</option>
                                        <option value={"11"}>Nov</option>
                                        <option value={"12"}>Dec</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- end card header -->
                            <!-- card body  --> */}
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">Products</th>
                                                <th className="pb-3 text-end min-w-[100px]">Catergory</th>
                                                <th className="pb-3 text-end min-w-[100px]">Price</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                                                <th className="pb-3 pr-12 text-end min-w-[100px]">Date Of Sold</th>
                                                <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.products?.map((item) => {
                                                return (
                                                    <TableData item={item} key={item._id} />
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 sm:flex sm:items-center w-full sm:justify-between ">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Page <span className="font-medium text-gray-700 dark:text-gray-100">{page} of 6</span>
                    </div>

                    <div className="flex items-center mt-4 gap-x-4 sm:mt-0">

                        <span className={page === 1 ? "disabled:bg-slate-200 disabled:cursor-not-allowed flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800" : "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"} onClick={() => setPage(prev => prev === 1 ? prev : prev - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>
                                previous
                            </span>
                        </span>

                        <span className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800" onClick={() => setPage(prev => prev === 6 ? prev : prev + 1)}>
                            <span>
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </div>
                </div>


                {year !== "" && month !== "" &&
                    (
                        <ModelBox
                            setModel={setModel}
                            year={year}
                            month={month}
                            setYear={setYear}
                            setMonth={setMonth}
                        />
                    )}
            </div>

        </>
    )
}

export default Table
