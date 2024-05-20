import React, { useEffect, useState } from 'react'
import DataTuple from './DataTuple';

function MarketCapList() {
    let [data, setData] = useState()
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false;'
    async function getData() {
        const response = await fetch(url);
        const data = await response.json()
        setData(data)
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <div className=''>
            <h3 className='text-center dark:text-white text-[1rem] font-bold py-3'>Cryptocurrency Prices by Market Cap</h3>
            <div className='grid grid-cols-3 gap-4 bg-yellow-500 dark:text-white place-items-center rounded-t-lg py-3'>
                <p className='text-sm font-semibold'>Coin</p>
                <p className='text-sm font-semibold'>Price</p>
                <p className='text-sm font-semibold'>24h Change</p>
                <p className='hidden'>Market Cap</p>
            </div>
            <div className='tables flex flex-col gap-1'>
                {data && data.map(data => {
                    return <DataTuple name={data.symbol} image={data.image} price={data.current_price} high={data.price_change_percentage_24h} marketcap={data.market_cap_change_24h} fullname={data.name}/>
                })}
                
            </div>
        </div>
    )
}

export default MarketCapList
