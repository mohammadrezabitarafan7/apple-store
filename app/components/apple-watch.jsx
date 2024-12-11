'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import Image from 'next/image';
import bbb from '../../public/images/7.png'
import p2 from '../../public/images/w1.png'
import p3 from '../../public/images/w2.png'
import p4 from '../../public/images/w3.png'
import { PlusIcon } from '@heroicons/react/24/outline'



const AppleWatch = () => {
    const [swiper, setSwiper] = useState(null);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 200000);

    const next = () => {
        swiper.slideNext();
    };
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    };

    const back = () => {
        swiper.slidePrev();
    };

    const items = [
        { img: p2, href: "", price: "1/580/000", des: "AEG Drill SB2-700" },
        { img: p3, href: "", price: "1/780/000", des: "AD-12A NEW 2021" },
        { img: p4, href: "", price: "1/350/000", des: "Ronix 2211 Impact Drill" },
        { img: p2, href: "", price: "1/350/000", des: "Ronix 2211 Impact Drill" },
        { img: p3, href: "", price: "1/350/000", des: "Ronix 2211 Impact Drill" },

    ];

    return (
        <div className='flex flex-col py-14 px-20 gap-9 pt-20 max-md:px-0'>
            {/* slider button */}
            <div className="flex flex-row justify-between px-5">
                <span className='text-black font-iransbold text-xl'>انواع اپل واچ</span>
                <div className="flex flex-row justify-between">
                    <div className='w-8 h-8 cursor-pointer' onClick={back}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.832 4L32.168 4C39.246 4 44 8.552 44 15.33L44 32.67C44 39.448 39.246 44 32.168 44L15.832 44C8.756 44 4 39.446 4 32.668L4 15.33C4 8.552 8.756 4 15.832 4Z" fill="#FF5023" fill-opacity="0.28" />
                            <path d="M25.7109 15.4412L33.2409 22.9372C33.8069 23.5012 33.8069 24.4992 33.2409 25.0652L25.7109 32.5612C25.1229 33.1452 24.1729 33.1432 23.5889 32.5552C23.0049 31.9672 23.0049 31.0192 23.5929 30.4332L28.5469 25.4992H15.8369C15.0069 25.4992 14.3369 24.8272 14.3369 23.9992C14.3369 23.1712 15.0069 22.4992 15.8369 22.4992L28.5469 22.4992L23.5929 17.5672C23.2989 17.2732 23.1529 16.8892 23.1529 16.5032C23.1529 16.1212 23.2989 15.7372 23.5889 15.4452C24.1729 14.8592 25.1229 14.8572 25.7109 15.4412Z" fill="#FF5023" />
                        </svg>
                    </div>
                    <div className='w-8 h-8 cursor-pointer' onClick={next}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.28" d="M32.168 4L15.832 4C8.754 4 4 8.552 4 15.33L4 32.67C4 39.448 8.754 44 15.832 44L32.168 44C39.244 44 44 39.446 44 32.668L44 15.33C44 8.552 39.244 4 32.168 4Z" fill="#FF5023" />
                            <path d="M22.2891 15.4412L14.7591 22.9372C14.1931 23.5012 14.1931 24.4992 14.7591 25.0652L22.2891 32.5612C22.8771 33.1452 23.8271 33.1432 24.4111 32.5552C24.9951 31.9672 24.9951 31.0192 24.4071 30.4332L19.4531 25.4992H32.1631C32.9931 25.4992 33.6631 24.8272 33.6631 23.9992C33.6631 23.1712 32.9931 22.4992 32.1631 22.4992L19.4531 22.4992L24.4071 17.5672C24.7011 17.2732 24.8471 16.8892 24.8471 16.5032C24.8471 16.1212 24.7011 15.7372 24.4111 15.4452C23.8271 14.8592 22.8771 14.8572 22.2891 15.4412Z" fill="#FF5023" />
                        </svg>
                    </div>

                </div>
            </div>



            <div className='flex flex-row gap-5 max-md:flex-col max-md:px-14'>
                <div className='flex flex-col gap-4 justify-between max-md:hidden'>
                    <div className='bg-main rounded-[10px] flex-grow flex justify-center items-center py-10'>
                        <Image  src={bbb} />
                    </div>

                    <div className='bg-[#FF510C0D]  rounded-[10px] p-4 hover:bg-[#ff510c3d]'>
                        <span className='text-main font-irans text-xl  flex justify-center'>مشاهده همه</span>
                    </div>

                </div>

                <div className='flex w-[70%] flex-col justify-between gap-4 max-md:w-full'>






                    <Swiper
                        className='w-full'
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={breakpoints}

                        onSwiper={setSwiper}
                        modules={[EffectFade, Navigation]}>
                        {
                            items.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <div className="bg-[#f6f6f6] rounded-[10px] p-5 flex flex-col gap-3
                                      cursor-pointer">
                                        <div className="bg-white p-3 rounded-[15px] h-[230px] flex justify-center">
                                            <Image className="m-auto" src={i.img} />
                                        </div>
                                        <span className="font-irans text-[15px] text-black text-center leading-relaxed max-md:text-sm truncate">{i.des}</span>
                                        <div className="flex justify-center py-5 ">
                                            <svg width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="180" y1="0.5" y2="0.5" stroke="#e4e4e4" />
                                            </svg>
                                        </div>
                                        <span className="font-irans text-[#212121] text-center text-[16px] max-md:text-sm">{i.price}  تومان </span>
                                        <div className="flex justify-end">
                                            <PlusIcon className="bg-main  w-6 h-6 text-white  cursor-pointer  rounded-md hover:bg-[#942e15] max-md:px-2" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='bg-[#FF510C0D]  rounded-[10px] p-4 hover:bg-[#ff510c3d] lg:hidden'>
                        <span className='text-main font-irans text-xl  flex justify-center'>مشاهده همه</span>
                    </div>
            </div>

        </div>
    )
}
export default AppleWatch

