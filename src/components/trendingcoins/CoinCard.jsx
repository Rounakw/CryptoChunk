import React from 'react'

function CoinCard({name, image, price, difference}) {
  return (
    <div className='coincardw-[100%] flex items-center justify-center gap-1 flex-col '>
      <img src={image} alt="" className='w-12 h-12 object-contain'/>
      

      <div>
      <span className='text-black font-semibold text-[0.9rem]'>{name.toUpperCase()}</span>
      <span className={`hidden ${difference<0?"text-red-700":"text-green-700"}`}>{difference.toFixed(2)}%</span>
      </div>
      {/* only for small devices */}
      <span className={`text-[1.0999rem] ${difference<0?"text-red-700":"text-green-700"}`}>{difference.toFixed(2)}%</span>
      
      <span className='hidden'>{price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
    </div>
  )
}

export default CoinCard
