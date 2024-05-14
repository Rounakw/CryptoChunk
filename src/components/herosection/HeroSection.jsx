import React from 'react'
import heroImg from './thumb1.avif'
import Input from '../inputField/Input'
function HeroSection() {
    return (
        <div className='w-[100%] h-[27rem] relative'>
            <img src={heroImg} alt="" className=' h-[100%] w-[100%] object-cover opacity-86' />
            <div className='absolute top-0 left-0 w-full h-full m-auto '>
                <div className="upper flex flex-col justify-center w-full h-full gap-8">
                    <p className='text-white  px-5 font-bold text-3xl text-wrap text-center'>Unlock the Future of Finance with <span className=''>Crypto</span><span className='text-yellow-500'>Chunk</span>
                    </p>

                    <Input design={"px-10 sm:px-20  md:px-[10rem] lg:px-[15rem] xl:px-[20rem]"}/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
