import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { SideBarItem } from '../sideBarItem'
import { IoBasketOutline, IoCalendar, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPerson, IoPersonOutline } from 'react-icons/io5'
import { getServerSession } from 'next-auth'
import { authOPtions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LogoutBUtton } from './LogoutBUtton'

const menuItems = [
  {
    icon: <IoCalendar/>,
    title: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline/>,
    title: 'Rest TODOS',
    path: '/dashboard/rest-todos'
  },
  {
    icon: <IoListOutline/>,
    title: 'Server Actions',
    path: '/dashboard/server-todos'
  },
  {
    icon: <IoCodeWorkingOutline/>,
    title: 'Coockies',
    path: '/dashboard/coockies'
  },
  {
    icon: <IoBasketOutline/>,
    title: 'Products',
    path: '/dashboard/products'
  },
  {
    icon: <IoPersonOutline/>,
    title: 'Perfil',
    path: '/dashboard/profile'
  }
]

export async function SideBar() {
  const session = await getServerSession(authOPtions);

  const image = session ? (session.user ? (session.user.image ? session.user.image : '/') : '/') : '/';
  const name = session ? (session.user?.name ?? 'No name') : 'No name';
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6">
          <Link href="/dashboard" title="home">
            <Image
              src={image}
              className='rounded-full'
              alt="tailus logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="mt-1 text-center">
          {/* <Image
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            height={150}
            width={150}
          /> */}
          <h5 className="hidden text-xl font-semibold text-gray-600 lg:block">{name}</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>
        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map((item) => (
              <SideBarItem 
                key={item.path}
                {...item}
              />
            ))
          }
        </ul>
      </div>
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutBUtton/>
      </div>
    </aside>
  )
}