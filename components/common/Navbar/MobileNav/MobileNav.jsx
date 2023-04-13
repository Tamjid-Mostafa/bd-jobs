import DropDownArrow from '@components/icons/DropDownArrow'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { BsFacebook, BsFillTelephoneFill, BsYoutube } from 'react-icons/bs'
import { IoMdArrowDropright } from 'react-icons/io'
import { MdExitToApp } from 'react-icons/md'
import cn from 'clsx';
import s from './MobileNav.module.css'

const MobileNav = ({ ...props }) => {
    const { dropdownmenu, navBarlinks, setIsMenuOpen, isMenuOpen } = props;
    const [open, setOpen] = useState(false)
    return (
        <nav className={cn(s.root, isMenuOpen ? 'translate-x-0' : '-translate-x-[100%]')}>
            <div className='flex flex-col justify-between h-full w-full'>
                <div className={cn(s.header)}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <BiLeftArrowAlt className='text-accent-9 text-4xl' />
                    </button>

                    <div className='flex gap-2 items-center text-xl'>
                        <a href="https://www.facebook.com/mybdjobs">
                            <BsFacebook className='text-blue text-2xl' />
                        </a>
                        <a href="https://www.youtube.com/mybdjobs">
                            <BsYoutube className='text-red text-2xl' />
                        </a>
                    </div>
                </div>
                <>
                    <div className={cn(s.body)}>
                        <>
                            <div className="relative flex flex-col items-start px-10">

                                <button className="font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center" type="button"
                                    onClick={() => setOpen(!open)}
                                >
                                    <img className="w-6 h-6 rounded-full ring-[2px] mr-3" src="https://my.bdjobs.com/photos//3500001-3525000/1413524186t8p0s.jpg?var=114202338" alt=""
                                    />
                                    <span>Tamjid Mostafa</span><DropDownArrow /></button>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownInformation" className={cn('absolute top-14 left-10 z-10  divide-y border-[1px] rounded-b-lg shadow w-64 bg-primary transition-all duration-300', open ? 'translate-y-0' : 'translate-y-[300%]')}>

                                    <ul className="py-2 text-sm text-gray-700">

                                        {
                                            dropdownmenu.map((item, index) =>
                                                <li key={index}>
                                                    <a href={item.slug} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                                        <span>
                                                            {item.icon}
                                                        </span>
                                                        <span>{item.name}</span>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><span>
                                            <MdExitToApp />
                                        </span>
                                            <span>Sign Out</span></a>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="-rotate-90">
                                        <BsFillTelephoneFill className='text-2xl' />
                                    </span>
                                    <span className='font-semibold'>Contact Us</span>
                                </div>
                            </div>
                        </>
                        <hr className='w-full' />
                        <>
                            <div className="flex items-center text-xl px-10">
                                <ul className="flex items-start flex-col font-medium gap-4">
                                    {
                                        navBarlinks.map((navBarlink, i) =>
                                            <li key={i}>
                                                <a href="#" className="text-gray-700 hover:underline hover:text-blue">
                                                    {navBarlink.label}
                                                </a>
                                            </li>
                                        )
                                    }
                                    <li>
                                        <a href="#" className="flex items-center gap-3">

                                            <span>Recruitment Agency / Foreign Employers</span>
                                            <div className='flex relative text-xl'>
                                                <span>
                                                    <IoMdArrowDropright />
                                                </span>
                                                <span className='-ml-3'>
                                                    <IoMdArrowDropright />
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>
                        <hr className='w-full' />
                        <div className='w-full'>
                            <p className='text-lg text-center'>বাংলাতে দেখুন</p>
                        </div>
                    </div>
                </>
                <div className='my-20 flex justify-center'>
                    <Image
                        width={300}
                        height={300}
                        alt={"Joint_venture"}
                        src="/Joint_venture.png"
                    />
                </div>
            </div>

        </nav>
    )
}

export default MobileNav