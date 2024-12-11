'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import MagIcon from '../components/icons/mag'
import TvIcon from '../components/icons/appletv'
import HomeIcon from '../components/icons/home'
import AppleWatch from '../components/apple-watch'
import IpadIcon from '../components/icons/ipad'
import Iphoneicon from '../components/icons/iphone'
import AppleWatchIcon from '../components/icons/applewatch'

const NavLinks = () => {
    const pathname = usePathname()
    const links = [
        { name: "شارژر مگ سیف", icon: MagIcon, href: "/magsafe" },
        { name: "هوم پاد", icon: HomeIcon, href: "/homepod" },
        { name: "اپل تی وی", icon: TvIcon, href: "/appletv" },
        { name: "اپل واچ", icon: AppleWatchIcon, href: "/applewatch" },
        { name: "آیپد", icon: IpadIcon, href: "/ipad" },
        { name: "آیفون", icon: Iphoneicon, href: "/iphone" },
    ]

    return (
        <div className="my-auto flex flex-row w-full justify-between  px-28">

            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={clsx(
                        'group flex flex-col items-center gap-2 p-2 rounded-lg font-irans text-sm text-center',
                        pathname === link.href
                            ? 'text-main select-none'
                            : 'text-[#303030] hover:text-main'
                    )}
                >
                    <link.icon/>
                    {/* متن لینک */}
                    <span>{link.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default NavLinks
