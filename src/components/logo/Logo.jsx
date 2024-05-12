import React from 'react'
import coin from './coin.svg'
function Logo() {
    return (
        <div className='flex items-center gap-[5px]'>
            <img src={coin} className='w-10' />
            <div className=''>
                <span className='text-black dark:text-white font-extrabold text-xl'>Crypto</span>
                <span className='text-yellow-500 font-extrabold text-xl'>Chunk</span>
            </div>
        </div>
    )
}

export default Logo

