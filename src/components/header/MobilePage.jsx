import React from 'react'

function MobilePage({ name, icon }) {
    return (
        <span className='text-xl flex items-center hover:bg-slate-300 dark:hover:bg-slate-800 justify-center py-2 border-b-[1px] border-black dark:border-white font-semibold cursor-pointer duration-100 ease-linear hover:text-yellow-500'>
            <div className='flex items-center gap-1'>
                <p className='mb-[5px] text-yellow-500'>{icon}</p>
                <p>{name}</p>

            </div>
        </span>
    )
}

export default MobilePage
