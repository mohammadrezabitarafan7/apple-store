const Services = () => {
    return (
        <div className="flex flex-row justify-between gap-2 h-[85px] bg-[#fafafa] px-20 max-md:px-5 max-md:h-[60px] my-7">

            <div className="flex flex-row gap-2 justify-end my-auto">
                <div className="my-auto w-7 h-7 max-md:hidden">
                    <svg viewBox="0 0 36 36" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4547 18.1705C22.8334 18.1705 22.3297 18.6742 22.3297 19.2955C22.3297 19.9168 22.8334 20.4205 23.4547 20.4205H27.5456C28.1669 20.4205 28.6706 19.9168 28.6706 19.2955C28.6706 18.6742 28.1669 18.1705 27.5456 18.1705H23.4547Z" fill="#FF510C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4714 5.06621C29.5875 5.73215 29.6156 6.52353 29.6234 7.42896C29.7535 7.49684 29.8812 7.56909 30.0067 7.64599C31.1672 8.35717 32.143 9.33292 32.8542 10.4935C33.6372 11.7712 33.9219 13.2521 34.0396 15.1344C34.1252 16.5037 34.1251 18.1692 34.1251 20.2148V20.2572C34.1251 21.4302 34.1251 22.4751 34.1097 23.4051C34.0617 26.2969 33.8744 28.3416 32.8542 30.0066C32.143 31.1671 31.1672 32.1428 30.0067 32.854C28.8985 33.5332 27.6413 33.8358 26.106 33.9818C24.5997 34.125 22.7143 34.125 20.3093 34.125H15.6911C13.2861 34.125 11.4006 34.125 9.8943 33.9818C8.35898 33.8358 7.10183 33.5332 5.99359 32.854C4.83305 32.1428 3.8573 31.1671 3.14612 30.0066C2.467 28.8983 2.16432 27.6412 2.01834 26.1058C1.87513 24.5996 1.87513 22.7141 1.87514 20.309L1.87526 19.5205C1.8555 18.7792 1.86157 17.9505 1.86811 17.057C1.87156 16.5861 1.87514 16.0971 1.87514 15.5935L1.87514 15.5284C1.87513 12.9601 1.87512 10.9443 2.04138 9.34452C2.21095 7.71282 2.56357 6.38193 3.35883 5.24079C3.83931 4.55133 4.42223 3.94309 5.08721 3.43941C6.19468 2.60056 7.49064 2.22765 9.07106 2.04914C10.613 1.87498 12.5527 1.87499 15.0098 1.87501L23.212 1.875C24.4098 1.87495 25.4251 1.87491 26.2345 1.98836C27.099 2.10953 27.8924 2.3791 28.5272 3.04092C29.0782 3.61539 29.3393 4.30842 29.4714 5.06621ZM23.1328 4.12501C24.4314 4.12501 25.2873 4.1276 25.9221 4.21658C26.5196 4.30032 26.752 4.44059 26.9034 4.59844C27.0435 4.74443 27.1698 4.96483 27.2548 5.45259C27.3116 5.77873 27.3427 6.17735 27.3591 6.68729C26.74 6.57397 26.0718 6.50414 25.344 6.45923C23.9789 6.375 22.3201 6.375 20.2849 6.37501H15.6911C13.286 6.375 11.4006 6.37499 9.8943 6.51821C8.35898 6.66419 7.10183 6.96686 5.99359 7.64599C5.39617 8.01209 4.84772 8.4483 4.35912 8.94374C4.52376 7.85274 4.79338 7.11757 5.20479 6.52723C5.55216 6.02878 5.97128 5.59236 6.44574 5.23298C7.10233 4.73564 7.9466 4.44046 9.3236 4.28492C10.7245 4.12668 12.5372 4.12501 15.0798 4.12501H23.1328ZM7.16922 9.56443C7.8645 9.13835 8.73665 8.88843 10.1073 8.75811C11.4946 8.62619 13.2733 8.62501 15.7501 8.62501H20.2501C22.3271 8.62501 23.9175 8.62549 25.2054 8.70496C26.4921 8.78435 27.3916 8.93913 28.1007 9.20843C28.3663 9.30929 28.6067 9.42691 28.8311 9.56443C29.6889 10.0901 30.4101 10.8113 30.9357 11.6691C31.3057 12.2727 31.5413 13.0065 31.6826 14.0796H23.4547C20.574 14.0796 18.2388 16.4148 18.2388 19.2955C18.2388 22.1762 20.574 24.5114 23.4547 24.5114H31.8292C31.7425 26.7019 31.5034 27.9045 30.9357 28.8309C30.4101 29.6887 29.6889 30.4099 28.8311 30.9356C28.1358 31.3617 27.2636 31.6116 25.893 31.7419C24.5056 31.8738 22.727 31.875 20.2501 31.875H15.7501C13.2733 31.875 11.4946 31.8738 10.1073 31.7419C8.73665 31.6116 7.8645 31.3617 7.16921 30.9356C6.31142 30.4099 5.59022 29.6887 5.06456 28.8309C4.63849 28.1356 4.38856 27.2635 4.25824 25.8929C4.12633 24.5055 4.12514 22.7269 4.12514 20.25C4.12514 17.7732 4.12633 15.9945 4.25824 14.6071C4.38856 13.2365 4.63849 12.3644 5.06456 11.6691C5.59022 10.8113 6.31142 10.0901 7.16922 9.56443ZM20.4888 19.2955C20.4888 17.6575 21.8167 16.3296 23.4547 16.3296H31.8415C31.8749 17.4155 31.8751 18.6966 31.8751 20.25C31.8751 20.9759 31.8751 21.6435 31.8716 22.2614H23.4547C21.8167 22.2614 20.4888 20.9335 20.4888 19.2955Z" fill="#FF510C" />
                    </svg>
                </div>
                <span className="font-irans text-[17px] my-auto text-black max-md:text-[8px] text-center">امکان پرداخت در محل</span>
            </div>
            <svg className="my-auto" width="3" height="55" viewBox="0 0 3 55" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.61724" y1="1.64654" x2="1.61724" y2="53.6175" stroke="#EBEBEB" stroke-width="1.64366" stroke-linecap="round" />
            </svg>


            <div className="flex flex-row gap-2 justify-end my-auto">
                <div className="my-auto w-7 h-7 max-md:hidden">
                    <svg viewBox="0 0 40 40" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6498 4.5835C23.0845 4.5835 23.7196 4.58475 24.2432 4.63164C30.0654 5.15291 34.6796 9.76711 35.2009 15.5893C35.2478 16.113 35.249 16.748 35.249 18.1827V19.8327C35.249 20.523 35.8087 21.0827 36.499 21.0827C37.1894 21.0827 37.749 20.523 37.749 19.8327V18.0987C37.749 16.7705 37.7491 16.0157 37.6909 15.3664C37.0618 8.33958 31.4929 2.77072 24.4662 2.1416C23.8168 2.08346 23.062 2.08347 21.7337 2.0835H19.9999C19.3095 2.0835 18.7499 2.64314 18.7499 3.3335C18.7499 4.02386 19.3095 4.5835 19.9999 4.5835L21.6498 4.5835Z" fill="#FF510C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8527 6.709C10.0992 5.09777 7.40399 5.09777 5.65051 6.709C5.5787 6.77498 5.50205 6.85165 5.40251 6.95121L3.90667 8.44705C2.40148 9.95224 1.76961 12.1221 2.23138 14.2001C4.85133 25.9898 14.0589 35.1974 25.8487 37.8173C27.9266 38.2791 30.0965 37.6473 31.6017 36.1421L33.0974 34.6464C33.197 34.5468 33.2737 34.4701 33.3397 34.3982C34.951 32.6447 34.951 29.9495 33.3397 28.196C33.2737 28.1242 33.197 28.0475 33.0974 27.9478L30.6486 25.4991C28.9484 23.7989 26.3809 23.3127 24.1768 24.2734C22.9149 24.8235 21.445 24.5451 20.4717 23.5717L16.477 19.5771C15.5037 18.6037 15.2253 17.1338 15.7753 15.872C16.7361 13.6679 16.2498 11.1003 14.5497 9.40014L12.1008 6.95125C12.0012 6.85167 11.9245 6.77499 11.8527 6.709ZM7.34202 8.54986C8.13906 7.81749 9.36418 7.81749 10.1612 8.54986C10.1887 8.57514 10.2248 8.6108 10.3516 8.73758L12.7819 11.1679C13.7552 12.1412 14.0336 13.6112 13.4836 14.873C12.5228 17.0771 13.0091 19.6447 14.7092 21.3448L18.7039 25.3395C20.4041 27.0397 22.9716 27.5259 25.1757 26.5652C26.4376 26.0151 27.9075 26.2935 28.8808 27.2668L31.3112 29.6972C31.4379 29.8239 31.4736 29.86 31.4989 29.8875C32.2312 30.6846 32.2312 31.9097 31.4989 32.7067C31.4736 32.7342 31.4379 32.7703 31.3111 32.8971L29.8339 34.3743C28.9331 35.2751 27.6346 35.6532 26.391 35.3769C15.5488 32.9675 7.08123 24.5 4.67185 13.6577C4.3955 12.4142 4.77364 11.1156 5.67443 10.2148L7.15167 8.73758C7.27845 8.61081 7.31451 8.57514 7.34202 8.54986Z" fill="#FF510C" />
                        <path d="M21.1782 7.97605C20.4878 7.97605 19.9282 8.5357 19.9282 9.22605C19.9282 9.91641 20.4878 10.4761 21.1782 10.4761H22.121C22.1392 10.4761 22.156 10.4761 22.1716 10.4761C22.2811 10.4761 22.332 10.4762 22.3744 10.4768C26.207 10.5317 29.3007 13.6253 29.3555 17.4579C29.3562 17.5064 29.3563 17.5659 29.3563 17.7113V18.6541C29.3563 19.3445 29.9159 19.9041 30.6063 19.9041C31.2966 19.9041 31.8563 19.3445 31.8563 18.6541V17.6992C31.8563 17.683 31.8563 17.6676 31.8563 17.653C31.8563 17.5502 31.8561 17.4823 31.8553 17.4221C31.781 12.2368 27.5955 8.0513 22.4102 7.97704C22.3414 7.97605 22.2626 7.97605 22.133 7.97605H21.1782Z" fill="#FF510C" />
                    </svg>

                </div>
                <span className="font-irans text-[17px] my-auto text-black max-md:text-[8px] text-center">پشتیانی 24 ساعته</span>
            </div>
            <svg className="my-auto" width="3" height="55" viewBox="0 0 3 55" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.61724" y1="1.64654" x2="1.61724" y2="53.6175" stroke="#EBEBEB" stroke-width="1.64366" stroke-linecap="round" />
            </svg>
            <div className="flex flex-row gap-2 justify-end my-auto">
                <div className="my-auto w-7 h-7 max-md:hidden">
                    <svg viewBox="0 0 38 38" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.7502 3.5625C23.0943 3.5625 22.5627 4.09416 22.5627 4.75C22.5627 5.40584 23.0943 5.9375 23.7502 5.9375H25.3335C29.0499 5.9375 32.0627 8.95025 32.0627 12.6667V14.25C32.0627 14.9058 32.5943 15.4375 33.2502 15.4375C33.906 15.4375 34.4377 14.9058 34.4377 14.25V12.6667C34.4377 7.63858 30.3616 3.5625 25.3335 3.5625H23.7502Z" fill="#FF510C"/>
                        <path d="M12.6668 3.5625C7.63874 3.5625 3.56266 7.63858 3.56266 12.6667V14.25C3.56266 14.9058 4.09432 15.4375 4.75016 15.4375C5.406 15.4375 5.93766 14.9058 5.93766 14.25V12.6667C5.93766 8.95025 8.95041 5.9375 12.6668 5.9375H14.2502C14.906 5.9375 15.4377 5.40584 15.4377 4.75C15.4377 4.09416 14.906 3.5625 14.2502 3.5625H12.6668Z" fill="#FF510C" />
                        <path d="M1.5835 20.9792C0.927658 20.9792 0.395996 21.5108 0.395996 22.1667C0.395996 22.8225 0.927658 23.3542 1.5835 23.3542H3.63023C3.58647 23.478 3.56266 23.6112 3.56266 23.75V25.3333C3.56266 30.3614 7.63874 34.4375 12.6668 34.4375H14.2502C14.906 34.4375 15.4377 33.9058 15.4377 33.25C15.4377 32.5942 14.906 32.0625 14.2502 32.0625H12.6668C8.95041 32.0625 5.93766 29.0497 5.93766 25.3333V23.75C5.93766 23.6112 5.91385 23.478 5.87009 23.3542H32.1302C32.0865 23.478 32.0627 23.6112 32.0627 23.75V25.3333C32.0627 29.0497 29.0499 32.0625 25.3335 32.0625H23.7502C23.0943 32.0625 22.5627 32.5942 22.5627 33.25C22.5627 33.9058 23.0943 34.4375 23.7502 34.4375H25.3335C30.3616 34.4375 34.4377 30.3614 34.4377 25.3333V23.75C34.4377 23.6112 34.4139 23.478 34.3701 23.3542H36.4168C37.0727 23.3542 37.6043 22.8225 37.6043 22.1667C37.6043 21.5108 37.0727 20.9792 36.4168 20.9792H1.5835Z" fill="#FF510C" />
                    </svg>


                </div>
                <span className="font-irans text-[17px] my-auto text-black max-md:text-[8px] text-center">ضمانت اصالت کالا</span>
            </div>
            <svg className="my-auto" width="3" height="55" viewBox="0 0 3 55" fill="#FF510C" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.61724" y1="1.64654" x2="1.61724" y2="53.6175" stroke="#EBEBEB" stroke-width="1.64366" stroke-linecap="round" />
            </svg>
            <div className="flex flex-row gap-2 justify-end my-auto max-md:flex-col">
                <div className="my-auto w-7 h-7 max-md:hidden">
                    <svg
                        className=""
                        viewBox="0 0 42 42"
                        fill="#FF510C"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M39.3205 12.8877C40.39 7.31112 35.4942 2.41528 29.9176 3.48478L13.9068 6.5554C10.4263 7.2229 7.64286 9.85744 6.75854 13.2807C4.99295 20.1155 11.3315 26.362 18.1374 24.3606C18.3254 24.3053 18.5 24.4799 18.4447 24.6679C16.4433 31.4738 22.6898 37.8124 29.5246 36.0468C32.9479 35.1625 35.5824 32.379 36.2499 28.8985L39.3205 12.8877ZM30.412 6.06279C34.1664 5.34276 37.4625 8.63886 36.7425 12.3932L33.6719 28.4041C33.197 30.8802 31.3171 32.8726 28.868 33.5052C23.9731 34.7697 19.5466 30.2252 20.9631 25.4084C21.6045 23.2273 19.578 21.2008 17.3968 21.8422C12.5801 23.2587 8.03562 18.8322 9.3001 13.9373C9.93274 11.4883 11.9252 9.60829 14.4012 9.13342L30.412 6.06279Z"
                            fill="#FF510C"
                        />
                        <path
                            d="M8.65295 28.5839C9.16551 28.0714 9.16551 27.2403 8.65295 26.7278C8.14039 26.2152 7.30936 26.2152 6.7968 26.7278L4.32192 29.2026C3.80936 29.7152 3.80936 30.5462 4.32192 31.0588C4.83449 31.5714 5.66551 31.5714 6.17808 31.0588L8.65295 28.5839Z"
                            fill="#FF510C"
                        />
                        <path
                            d="M14.8401 29.8214C15.3527 29.3088 15.3527 28.4778 14.8401 27.9652C14.3276 27.4526 13.4965 27.4526 12.984 27.9652L10.5091 30.4401C9.99654 30.9526 9.99654 31.7837 10.5091 32.2962C11.0217 32.8088 11.8527 32.8088 12.3653 32.2962L14.8401 29.8214Z"
                            fill="#FF510C"
                        />
                        <path
                            d="M16.0776 36.0085C16.5901 35.496 16.5901 34.665 16.0776 34.1524C15.565 33.6398 14.734 33.6398 14.2214 34.1524L11.7465 36.6273C11.234 37.1398 11.234 37.9709 11.7465 38.4834C12.2591 38.996 13.0901 38.996 13.6027 38.4834L16.0776 36.0085Z"
                            fill="#FF510C"
                        />
                    </svg>


                </div>
                <span className="font-irans text-[17px] my-auto text-black max-md:text-[8px] text-center">ارسال سریع</span>
            </div>

        </div>
    )
}
export default Services