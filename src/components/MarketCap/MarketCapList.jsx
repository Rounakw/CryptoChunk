import React, { forwardRef, useEffect, useState } from 'react'
import DataTuple from './DataTuple';

function MarketCapList({ page }, ref) {
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
        <div className='' ref={ref}>
            <h3 className='text-center dark:text-white text-[1rem] font-bold py-3 sm:text-xl lg:text-2xl'>Cryptocurrency Prices by Market Cap</h3>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 bg-yellow-500 dark:text-white place-items-center rounded-t-lg py-3'>
                <p className='text-sm font-semibold lg:text-lg'>Coin</p>
                <p className='text-sm font-semibold lg:text-lg'>Price</p>
                <p className='text-sm font-semibold lg:text-lg'>24h Change</p>
                <p className='hidden sm:block text-sm font-semibold lg:text-lg'>Market Cap</p>
            </div>
            <div className='tables flex flex-col gap-1'>
                {data && data.slice(page * 10 - 10, page * 10).map((data, idx) => {
                    return <DataTuple key={idx} name={data.symbol} id={data.id} image={data.image} price={data.current_price} high={data.market_cap_change_percentage_24h} marketcap={data.market_cap_change_24h} fullname={data.name} />
                })}

            </div>
        </div>
    )
}

export default forwardRef(MarketCapList)
