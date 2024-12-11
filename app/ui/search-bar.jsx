import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'
const SerachBar = () => {
    return (
        <div className=' h-[38px] flex flex-row justify-center items-center gap-3  mx-auto'>


            <div className='rounded-full bg-main flex flex-row px-4  h-[38px]'>
                <Bars3Icon className='w-4 h-4 my-auto mx-2 text-white' />
                <button className='text-white font-irans text-sm'>محصولات</button>
            </div>
            <div className=" w-[390px] h-full flex flex-row justify-center rounded-full max-md:w-2/3 bg-[#fafafa]">
                <input
                    className="w-full bg-[#fafafa] rounded-full font-irans focus:outline-none text-[12px] placeholder:text-gray1 text-gray1 px-2"
                    placeholder="جستوجو کنید"
                    type="text"
                />
                <MagnifyingGlassIcon className='w-4 h-4 my-auto mx-2' />

            </div>

        </div>

    )
}
export default SerachBar