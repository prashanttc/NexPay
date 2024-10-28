'use client';
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
  return (
  <section className="sidebar">
    <nav className="flex flex-col gap-4">
       <Link className="mb-12 cursor-pointer gap-3 flex items-center" href="/">
       <Image src="/icons/logo.svg" width={34} height={34} alt="logo" className="size-[24px] max-xl:size-14"/>
       <h1 className="sidebar-logo">NexPay</h1></Link>

       {sidebarLinks.map((item)=>{
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
            <Link href={item.route}
             key={item.label}
             className={cn('sidebar-link',{'bg-bankGradient':isActive})}
             >
             <div className="relative size-6">
             <Image src={item.imgURL} alt="image url" fill className={cn({'brightness-[3] invert-0':isActive})}/>
             </div>
             <p className={cn('sidebar-label',{'!text-white':isActive})}>
                {item.label}
             </p>
                </Link>
        )
       })}
    </nav>
  </section>
  )
}

export default Sidebar
