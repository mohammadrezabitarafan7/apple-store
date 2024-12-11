'use client'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import p5 from '../../public/images/i16.png';
import p4 from '../../public/images/we.png';
import MyTimer from './timer';



const Offer = () => {


  const StyledSwiper = styled(Swiper)`
    /* استایل‌های swiper */
    .swiper-pagination {
      position: relative;
      top: 0px;
      margin-top:32px;
    }
  
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      opacity: 1;
      transition: all 0.3s ease;
    }
  
    .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
      background: #ff5023;
    }
  
    .swiper-pagination-bullet:hover {
      background-color: #ff5023;
    }
  `;

  const items = [
    { id: 1, img: p5, href: '', name: 'دریل گیربکسی AEG ', price: '1/580/000', des: 'AEG Drill SB2-700' },
    { id: 2, img: p5, href: '', name: 'دریل چکشی رونیکس۲۲۱۱', price: '1/780/000', des: 'AD-12A NEW 2021' },
    { id: 3, img: p5, href: '', name: 'دریل چکشی رونیکس۲۲۱۱', price: '1/350/000', des: 'Ronix 2211 Impact Drill' },
  ];
  const time = new Date();
  time.setSeconds(time.getSeconds() + 200000);


  return (

    <div className='flex flex-col px-20 gap-9 pt-20 max-md:px-0'>
      <div className="flex flex-row justify-between items-center px-6 max-md:flex-col max-md:gap-5">
        <span className="font-iransbold text-xl text-main ">پیشنهاد شگفت انگیز</span>
        <div className="flex justify-center">
          <MyTimer expiryTimestamp={time} />
        </div>
      </div>

      <div className="flex flex-col  px-4">
        <StyledSwiper
        className='w-full'
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {
            items.map((i) => (
              <SwiperSlide key={i.id}>
                <div className='flex flex-row justify-around  bg-[#fafafa] rounded-[20px] shadow-md'>
                  <div className='basis-[45%] max-h-full p-4'>
                    <Image className='rounded-lg ' src={i.img} />
                  </div>
                  <div className='basis-[55%] flex flex-col gap-12 justify-center max-md:gap-4'>
                    <span className='font-iransbold text-black text-3xl text-start max-md:text-[18px] max-md:pt-4'>خرید آیفون 16 پرومکس 256 گیگ</span>
                    <div className='flex flex-row justify-start gap-10 '>
                      <span className='font-irans line-through text-slate-300 text-lg my-auto max-md:text-sm'>قیمت : ۶۲/۰۰۰/۰۰۰</span>
                      <span className='font-irans  text-main text-lg max-md:text-sm'>قیمت : ۶۰/۵۰۰/۰۰۰</span>
                    </div>
                    <div className='flex flex-row justify-start gap-10 max-md:flex-col max-md:gap-4 max-md:p-3'>
                      <span className='font-irans  text-main text-sm my-auto max-md:hidden'>با گارانتی الماس پایتخت همانند گارانتی اپل</span>
                      <button className='font-irans px-6 py-1 text-white rounded-sm  bg-main text-sm hover:bg-[#af3a0b]  max-md:text-xs max-md:w-24'>خرید کنید</button>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))
          }
        </StyledSwiper>
      </div>
    </div>
  )
}

export default Offer;
