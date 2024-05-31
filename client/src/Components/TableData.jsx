import React from 'react'


const TableData = ({ item }) => {
    return (
        <>
            <tr className="border-b border-dashed last:border-b-0">
                <td className="p-3 pl-0">
                    <div className="flex items-center">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                            <img src={item.image} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                        </div>
                        <div className="flex flex-col justify-start">
                            <a href="" className="mb-1  transition-colors duration-200 ease-in-out text-normal text-secondary-inverse hover:text-primary"> {item.title.slice(0, 40)}.. </a>
                        </div>
                    </div>
                </td>
                <td className="p-3 pr-0 text-end">
                    <span className="font-semibold text-light-inverse text-md/normal">{item.category}</span>
                </td>
                <td className="p-3 pr-0 text-end">
                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                       $ {item.price.toFixed(2)}
                    </span>
                </td>
                <td className="p-3 pr-12 text-end">
                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> {item.sold === true ? " Sold" : "Not Sold"} </span>
                </td>
                <td className="pr-0 text-start">
                    <span className="font-semibold text-light-inverse text-md/normal">{item.dateOfSale.slice(0,10)}</span>
                </td>
                <td className="p-3 pr-0 text-end">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center" >
                        <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </td>
            </tr>
         
        </>
    )
}

export default TableData
