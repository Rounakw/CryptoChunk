import React, { useRef, useState } from 'react'
import MarketCapList from './MarketCapList'
import Button from '../button/Button'

function MarketCapData() {
    let [page, setPage] = useState(1)
    let ref  = useRef(null)
    function handlePrevBtn(){
        if(page===1) return;
        ref.current?.scrollIntoView()
        setPage(page-1)
    }
    function handleNextBtn(){
        if(page===10) return;
        ref.current?.scrollIntoView();
        setPage(page+1)
    }
    return (
        <div className='px-4 md:px-16 lg:px-36 xl:px-44'>
            <MarketCapList page={page} ref={ref}/>

            <div className='flex items-center justify-center py-6'>
                <Button style={page===1 && 'hidden sm:block sm:cursor-not-allowed'}  text={"Prev"} onClick={handlePrevBtn} />
                <p className='mx-5 dark:text-white'> {page} of 10 </p>
                <Button style={page===10 && 'hidden sm:block sm:cursor-not-allowed'}  text={"Next"} onClick={handleNextBtn}/>
            </div>
        </div>
    )
}

export default MarketCapData
