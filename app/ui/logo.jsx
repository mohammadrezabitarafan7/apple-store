import Image from "next/image"
import logo from '../../public/images/App Store.png'

const Logo = () => {
    return (
        <div className="h-[48px] gap-3  flex justify-center my-auto items-center">
            <Image width={25} src={logo}/>
            <span className=" text-xl text-main font-irans font-bold">اپل استور</span>
        </div>
    )
}
export default Logo