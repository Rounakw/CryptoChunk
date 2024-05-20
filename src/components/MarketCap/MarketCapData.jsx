import React, { useRef, useState } from 'react'
import MarketCapList from './MarketCapList'
import Button from '../button/Button'

function MarketCapData() {
    let [page, setPage] = useState(1)
    let ref  = useRef(null)
    function handlePrevBtn(){
        ref.current?.scrollIntoView({behaniour:"smooth"})
        if(page===1) return;
        setPage(page-1)
    }
    function handleNextBtn(){
        ref.current?.scrollIntoView({ behavior: "smooth" });
        if(page===10) return;
        setPage(page+1)
    }
    return (
        <div className='px-4 md:px-16 lg:px-36 xl:px-44'>
            <MarketCapList page={page} ref={ref}/>

            <div className='flex items-center justify-center py-6'>
                <Button text={"Prev"} onClick={handlePrevBtn} />
                <p className='mx-5 dark:text-white'> {page} of 10 </p>
                <Button text={"Next"} onClick={handleNextBtn}/>
            </div>
        </div>
    )
}

export default MarketCapData
