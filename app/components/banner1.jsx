import Image from 'next/image';
import p2 from '../../public/images/aa.png'
import p3 from '../../public/images/de.png'
import Link from 'next/link';
const Banner1 = () => {
    return (
        <div className='flex flex-row gap-5    px-20 max-md:px-5 max-md:flex-col max-md:h-full'>
            <Link href="/" className='basis-[60%] duration-500 hover:translate-y-1'>
                <Image className='max-h-full rounded-xl' src={p3} />
            </Link>
            <Link href="/" className='basis-[40%] duration-500 hover:translate-y-1 '>
                <Image className=' max-h-full w-full rounded-xl' src={p2} />
            </Link>
     </div>
    )
}
export default Banner1