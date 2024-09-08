import React from 'react'
import { useNavigate } from 'react-router-dom'

function DataTuple({ image, name, price, high, marketcap, fullname, id }) {
    const navigate = useNavigate()
    async function handleClickCoin() {
        navigate(`coin-Details/${id}`)
    }
    return (
        <div onClick={handleClickCoin} className='grid grid-cols-3 sm:grid-cols-4 place-items-center py-3 transition-all duration-300 ease-linear  hover:bg-gray-200  dark:hover:bg-slate-700 cursor-pointer bg-gray-100 dark:bg-slate-800'>

            <div className='flex w-28 gap-2 items-center pl-2'>
                <img src={image} alt={name} className='w-10 object-contain' />

                <div className='flex flex-col items-start'>
                    <p className='text-sm font-semibold dark:text-white lg:text-[1rem]'>{name.toUpperCase()}</p>
                    <p className='text-[0.6rem] w-[200px] text-gray-500 lg:text-[0.8rem]'>{fullname}</p>
                </div>

            </div>

            <p className='font-semibold text-[0.875rem] dark:text-white'>{price.toLocaleString('en-IN', {
                style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0
            })}</p>

            <p className={`font-semibold ${marketcap < 0 ? "text-red-700" : "text-green-700"}`}>{high.toFixed(2)}%</p>

            <p className="hidden sm:block font-semibold text-[0.875rem] dark:text-white ">{marketcap.toLocaleString('en-IN', {
                style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0
            })}</p>

        </div>
    )
}

export default DataTuple
