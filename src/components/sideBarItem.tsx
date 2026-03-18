'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci'

interface Props {
    icon: React.ReactNode,
    path: string;
    title: string,
}

export function SideBarItem({title, icon, path}: Props) {

    const pathName = usePathname();

    return (
        <li>
            <Link href={path} className={`
                hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
                relative px-4 py-3 flex items-center space-x-4 rounded-xl 
                ${path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`}>
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}