import React from 'react'

function CoinCard({name, image, price, difference}) {
  return (
    <div className='coincard w-[100%] flex items-center justify-center gap-1 flex-col '>
      <img src={image} alt="" className='w-12 h-12 object-contain sm:w-16 sm:h-16'/>
      

      <div className='flex items-center justify-center gap-1 mt-3'>
      <span className='text-black dark:text-white font-semibold text-[1rem] md:text-[1.2rem] md:font-medium xl:text-[1.4rem] xl:font-bold'>{name.toUpperCase()}</span>
      <span className={`hidden sm:block font-semibold text-[0.9rem] md:text-[1.1rem] xl:text-[1.4rem] ${difference<0?"text-red-700":"text-green-700"}`}>{difference.toFixed(2)}%</span>
      </div>

      {/* only for small devices */}
      <span className={`text-[1.0999rem]  sm:hidden ${difference<0.0?"text-red-700":"text-green-700"}`}>{difference.toFixed(2)}%</span>
      
      <span className='hidden sm:block dark:text-white md:text-[1rem] font-[600]'>{price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
    </div>
  )
}

export default CoinCard
