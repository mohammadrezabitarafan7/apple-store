import Image from 'next/image';
import vv from '../../public/images/rty.png'
import Link from 'next/link';
const Banner2 = () => {
    return (
        <div className='flex flex-row gap-5   px-20 max-md:px-5 max-md:flex-col max-md:h-full'>
            <Link href="/" className=' duration-500 hover:translate-y-1'>
                <Image className='rounded-xl max-w-full' src={vv} />
            </Link>
            
     </div>
    )
}
export default Banner2