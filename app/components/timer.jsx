'use client'
import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp }) => {
    const {

        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (

        <div className='flex flex-row justify-between gap-2'>
            <div className='flex flex-col gap-3'>
                <div className='w-[50px] h-[50px] rounded-lg  bg-[#FFF1EB] flex max-md:w-[35px] max-md:h-[30px]   '>
                    <span className='m-auto text-main  font-irans text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-[#f16423]'>{seconds}</span>
                </div>
                <span className='m-auto text-black font-irans text-sm max-md:text-[16px] max-md:font-thin max-md:text-[#f16423] max-md:text-xs'>ثانیه</span>

            </div>
            <div className='flex flex-col gap-3'>
                <div className='w-[50px] h-[50px] rounded-lg  bg-[#FFF1EB] flex max-md:w-[35px] max-md:h-[30px]   '>
                    <span className='m-auto text-main font-irans text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-[#f16423]'>{minutes}</span>
                </div>
                <span className='m-auto text-black font-irans text-sm max-md:text-[16px] max-md:font-thin max-md:text-[#f16423] max-md:text-xs'>دقیقه</span>

            </div>   <div className='flex flex-col gap-3'>
                <div className='w-[50px] h-[50px] rounded-lg  bg-[#f16423] flex max-md:w-[35px] max-md:h-[30px]'>
                    <span className='m-auto text-white font-irans text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-white'>{hours}</span>
                </div>
                <span className='m-auto text-black font-irans text-sm max-md:text-[16px] max-md:font-thin max-md:text-[#f16423] max-md:text-xs'>ساعت</span>

            </div>
        </div>
    );
}
export default MyTimer