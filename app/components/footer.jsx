import Image from "next/image"
import e1 from '../../public/images/e1.png'
import e2 from '../../public/images/e2.png'
import Link from "next/link"
const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-between bg-[#fafafa] px-20 pt-12">
                <div className="flex flex-row justify-between  gap-5 ">
                    {/* LINKS */}
                    <div className="flex flex-col gap-4 max-md:hidden">
                        <span className=" font-irans text-lg text-black ">فروشگاه</span>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">مک</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">آیفون</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">آیپد</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">اپل واچ</Link>
                    </div>

                    <div className=" flex flex-col gap-4 max-md:hidden">
                        <span className="text-black font-irans text-lg ">لوازم جانبی</span>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">ایرپاد</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">هوم پد</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">ایر تگ</Link>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <span className="text-black font-irans text-lg ">دسترسی سریع</span>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">حساب کاربری</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">تسویه حساب</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">سبد خرید</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">فروشگاه</Link>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <span className="text-black font-irans text-lg ">ارتباط با ما</span>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">تماس با ما</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">درباره ما</Link>
                        <Link href="/" className="font-irans text-sm text-[#818181] hover:text-[#9c9c9c]">نقشه سایت</Link>
                    </div>
                </div>


                <div className="flex flex-row justify-between py-12 max-md:flex-col max-md:gap-5">


                    <div className="flex flex-row justify-end gap-4">
                        <Image className="w-24 h-28 max-md:w-12 max-md:h-14" src={e2} />

                    </div>

                    {/* blog */}
                    <div className="flex flex-col gap-3  w-1/2 max-md:w-full max-md:gap6 ">
                        <span className="text-black font-irans text-lg text-start max-md:text-center">عضویت در خبرنامه</span>
                        <div className="flex flex-row justify-start gap-3">
                            <input className="bg-white rounded-lg p-3 font-irans text-sm flex-grow focus:outline-none" placeholder="ایمیل خود را وارد کنید" type="text" />
                            <button className="text-main rounded-lg font-irans text-sm bg-[#FF510C0D] px-6">عضویت</button>
                        </div>
                    </div>
                    {/* icons */}
                    <div className="flex flex-row  gap-3 justify-around">
                        <Link href="/" className="my-auto  bg-white p-2 rounded-lg hover:bg-[#ebebeb]">
                            <svg className="w-6 h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.116 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20ZM22 3H10C8.14409 3.00199 6.36477 3.74012 5.05245 5.05245C3.74012 6.36477 3.00199 8.14409 3 10V22C3.00199 23.8559 3.74012 25.6352 5.05245 26.9476C6.36477 28.2599 8.14409 28.998 10 29H22C23.8559 28.998 25.6352 28.2599 26.9476 26.9476C28.2599 25.6352 28.998 23.8559 29 22V10C28.998 8.14409 28.2599 6.36477 26.9476 5.05245C25.6352 3.74012 23.8559 3.00199 22 3ZM27 22C27 23.3261 26.4732 24.5979 25.5355 25.5355C24.5979 26.4732 23.3261 27 22 27H10C8.67392 27 7.40215 26.4732 6.46447 25.5355C5.52678 24.5979 5 23.3261 5 22V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H22C23.3261 5 24.5979 5.52678 25.5355 6.46447C26.4732 7.40215 27 8.67392 27 10V22ZM24 9.5C24 9.79667 23.912 10.0867 23.7472 10.3334C23.5824 10.58 23.3481 10.7723 23.074 10.8858C22.7999 10.9994 22.4983 11.0291 22.2074 10.9712C21.9164 10.9133 21.6491 10.7704 21.4393 10.5607C21.2296 10.3509 21.0867 10.0836 21.0288 9.79264C20.9709 9.50166 21.0007 9.20006 21.1142 8.92597C21.2277 8.65189 21.42 8.41762 21.6666 8.2528C21.9133 8.08797 22.2033 8 22.5 8C22.8978 8 23.2794 8.15804 23.5607 8.43934C23.842 8.72064 24 9.10218 24 9.5Z" fill="black" />
                            </svg>
                        </Link>
                        <Link href="/" className="my-auto  bg-white p-2 rounded-lg hover:bg-[#ebebeb]">
                            <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="black" />
                            </svg>
                        </Link>
                        <Link href="/" className="my-auto  bg-white p-2 rounded-lg hover:bg-[#ebebeb]">
                            <svg className="w-6 h-6" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.1257 7.00164C25.0643 6.85316 24.9602 6.72625 24.8266 6.63694C24.693 6.54764 24.5359 6.49995 24.3752 6.49992H21.2846C20.8525 5.76479 20.2376 5.15397 19.4995 4.72685C18.7615 4.29973 17.9255 4.07083 17.0728 4.06242C16.4376 4.05409 15.8071 4.17289 15.2184 4.41185C14.6297 4.6508 14.0948 5.00508 13.6451 5.45383C13.1823 5.90804 12.8149 6.4502 12.5646 7.04845C12.3143 7.64669 12.1862 8.28893 12.1877 8.93742V9.55594C8.09878 8.47734 4.75432 5.15117 4.71878 5.11562C4.60977 5.00565 4.47161 4.92912 4.32057 4.89504C4.16952 4.86096 4.01189 4.87074 3.86622 4.92325C3.72055 4.97575 3.59292 5.06879 3.49835 5.1914C3.40379 5.31401 3.34623 5.46109 3.33245 5.61531C2.89471 10.469 4.3044 13.717 5.56682 15.5867C6.18237 16.511 6.9312 17.3393 7.78901 18.0445C6.24221 19.8249 3.80675 20.7603 3.78034 20.7705C3.66569 20.8134 3.56223 20.8817 3.47768 20.9702C3.39313 21.0588 3.32969 21.1653 3.29209 21.2818C3.25449 21.3983 3.2437 21.5218 3.26054 21.6431C3.27738 21.7644 3.3214 21.8802 3.38932 21.9821C3.46549 22.0959 3.77018 22.495 4.51464 22.8677C5.43479 23.3288 6.6505 23.5624 8.12518 23.5624C15.3026 23.5624 21.2999 18.0354 21.9123 10.924L24.95 7.88727C25.0636 7.77357 25.1409 7.62875 25.1722 7.47111C25.2035 7.31346 25.1873 7.15009 25.1257 7.00164ZM20.5554 9.98859C20.4161 10.1282 20.3324 10.3138 20.3198 10.5106C19.9064 16.9182 14.5521 21.9374 8.12518 21.9374C7.05268 21.9374 6.29706 21.7952 5.7669 21.6246C6.93589 20.9898 8.56596 19.898 9.61409 18.3259C9.67561 18.2334 9.71752 18.1293 9.73724 18.0201C9.75697 17.9108 9.75408 17.7986 9.72877 17.6905C9.70345 17.5824 9.65624 17.4806 9.59005 17.3914C9.52386 17.3023 9.4401 17.2276 9.34393 17.1721C9.2962 17.1447 4.88432 14.497 4.87518 7.42211C6.50018 8.74242 9.47089 10.7909 12.8651 11.3617C12.9814 11.3813 13.1006 11.3754 13.2144 11.3443C13.3282 11.3132 13.4339 11.2576 13.5241 11.1816C13.6142 11.1055 13.6868 11.0107 13.7366 10.9038C13.7864 10.7969 13.8124 10.6804 13.8127 10.5624V8.93742C13.8118 8.504 13.8976 8.07478 14.065 7.67501C14.2324 7.27524 14.4782 6.913 14.7877 6.60961C15.0844 6.31233 15.4377 6.07756 15.8267 5.91916C16.2157 5.76077 16.6325 5.68197 17.0525 5.68742C18.3383 5.70367 19.5398 6.48773 20.0425 7.63844C20.1059 7.78311 20.2101 7.90617 20.3423 7.99257C20.4745 8.07897 20.629 8.12497 20.787 8.12492H22.412L20.5554 9.98859Z" fill="black" />
                            </svg>

                        </Link>
                    </div>
                </div>

            </div>
            <div className="bg-white py-6 flex justify-center mt-3">
                <span className="text-black font-irans text-center m-auto items-center">کلیه حقوق مادی و معنوی متعلق به خودم میباشد</span>
            </div>
        </>
    )
}
export default Footer