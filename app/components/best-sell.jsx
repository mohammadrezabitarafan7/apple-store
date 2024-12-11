'use client'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination } from 'swiper/modules';
import Image from "next/image"
import p1 from '../../public/images/1.png'
import p2 from '../../public/images/2.png'
import p3 from '../../public/images/3.png'
import p4 from '../../public/images/4.png'
import { PlusIcon } from '@heroicons/react/24/outline'

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
const products = [
    {
        title: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
        price: "16/650/000",
        img: p1,
        des: "ronix 2211 impact drill"
    },
    {
        title: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
        price: "6/480/000",
        img: p2,
        des: "ronix 2211 impact drill"
    },
    {
        title: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
        price: "1/580/000",
        img: p3,
        des: "ronix 2211 impact drill"
    },
    {
        title: "ایرپاد مکس هدفون بلوتوث اپل",
        price: "826/000",
        img: p4,
        des: "ronix 2211 impact drill"
    }, {
        title: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
        price: "16/650/000",
        img: p1,
        des: "ronix 2211 impact drill"
    },
    {
        title: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
        price: "6/480/000",
        img: p2,
        des: "ronix 2211 impact drill"
    },
    {
        title: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
        price: "1/580/000",
        img: p3,
        des: "ronix 2211 impact drill"
    },
    {
        title: "ایرپاد مکس هدفون بلوتوث اپل",
        price: "826/000",
        img: p4,
        des: "ronix 2211 impact drill"
    },

]

const breakpoints = {
    // when window width is >= 320px
    320: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    720: {
        slidesPerView: 4,
        spaceBetween: 20,
    },

};

const BestSells = () => {

    return (
        <div className="flex flex-col gap-5 px-20 py-20 max-md:px-5">
            <div className="flex flex-row justify-self-center py-6 max-md:py-2">
                <div className="basis-[98%]  flex justify-center">
                    <span className="text-black  text-xl font-iransbold max-md:text-sm">
                        پرفروش ترین محصولات
                    </span>
                </div>
                <div className="basis-[2%]  flex justify-end">
                    <div className="flex flex-row justify-center cursor-pointer text-main hover:text-[#942e15] ">
                        <svg className="w-7 h-7 max-md:w-4 max-md:h-4" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 18.4114C30 18.981 29.5768 19.4516 29.0277 19.5261L28.875 19.5364L9.099 19.5355L16.2435 26.6508C16.6838 27.0892 16.6853 27.8015 16.2469 28.2418C15.8484 28.6421 15.2235 28.6797 14.7823 28.3539L14.6559 28.2452L5.58092 19.2092C5.52288 19.1514 5.47248 19.0889 5.42969 19.0228C5.41761 19.003 5.40531 18.9826 5.39365 18.9619C5.38292 18.9441 5.37323 18.9256 5.36408 18.907C5.35138 18.8798 5.33897 18.8517 5.32771 18.8231C5.31855 18.801 5.31091 18.7795 5.30394 18.7579C5.29565 18.7311 5.2876 18.7025 5.28067 18.6734C5.27552 18.6531 5.27144 18.6336 5.26788 18.614C5.26288 18.5849 5.25862 18.5547 5.25558 18.5242C5.25296 18.5009 5.25138 18.4779 5.25051 18.4548C5.25028 18.4408 5.25 18.4261 5.25 18.4114L5.25056 18.3678C5.25143 18.3458 5.25293 18.3237 5.25509 18.3017L5.25 18.4114C5.25 18.3404 5.25658 18.271 5.26915 18.2036C5.27207 18.1875 5.27554 18.171 5.27939 18.1546C5.28738 18.1207 5.29662 18.0881 5.30725 18.0561C5.31247 18.0402 5.31855 18.0233 5.32505 18.0064C5.3382 17.9726 5.35249 17.9403 5.36821 17.9089C5.37551 17.8941 5.38369 17.8786 5.39225 17.8633C5.40631 17.8383 5.4208 17.8146 5.43611 17.7914C5.44691 17.775 5.45888 17.758 5.47137 17.7412L5.48111 17.7282C5.51142 17.6886 5.5443 17.6511 5.5795 17.6159L5.58085 17.6149L14.6559 8.57737C15.0961 8.13894 15.8084 8.14042 16.2468 8.58067C16.6454 8.98089 16.6804 9.60596 16.3527 10.0457L16.2435 10.1717L9.102 17.2855L28.875 17.2864C29.4963 17.2864 30 17.7901 30 18.4114Z" fill="#FF5023" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <StyledSwiper
                    breakpoints={breakpoints}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}>
                    {
                        products.map((i) => (
                            <SwiperSlide key={i.id}>
                                <div className="bg-[#f6f6f6] rounded-[10px] p-5 flex flex-col gap-3
                                 cursor-pointer">
                                    <div className="bg-white p-3 rounded-[15px] h-[230px] flex justify-center max-md:h-[150px]">
                                        <Image className="m-auto max-md:h-24" src={i.img} />
                                    </div>
                                    <span className="font-irans text-[15px] text-black text-center leading-relaxed max-md:text-sm truncate">{i.title}</span>
                                    <div className="flex justify-center py-5 ">
                                        <svg width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="180" y1="0.5" y2="0.5" stroke="#e4e4e4" />
                                        </svg>
                                    </div>
                                    <span className="font-irans text-[#212121] text-center text-[16px] max-md:text-sm">{i.price}تومان </span>
                                    <div className="flex justify-end">
                                        <PlusIcon className="bg-main  w-6 h-6 text-white  cursor-pointer  rounded-md hover:bg-[#942e15] max-md:px-2
                                        max-md:w-7  max-md:h-7" />
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
export default BestSells