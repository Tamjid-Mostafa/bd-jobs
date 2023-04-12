import Container from '@components/ui/Container';
import React, { useState } from 'react'
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';

const Topbar = ({ ...props }) => {
    const { navBarlinks } = props;
    const [color, setColor] = useState(false)
    return (
        <nav className="bg-gray-200 ">
            <Container>
                <div className="max-w-screen-xl px-4 mx-auto flex justify-between items-center">
                    <div className="flex items-center ">
                        <ul className="flex items-center flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            {
                                navBarlinks.map((navBarlink, i) =>
                                    <li key={i}>
                                        <a href="#" className="text-gray-700hover:underline hover:text-blue">
                                            {navBarlink.label}
                                        </a>
                                    </li>
                                )
                            }
                            <li>
                                <a href="#" className="text-gray-700 hover:underline hover:text-blue bg-gray-400 py-3 px-2 flex items-center gap-3">

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
                    <div className='order-1 flex gap-3 items-center'>
                        <div className='flex gap-2 items-center text-xl'>
                            <a href="https://www.facebook.com/mybdjobs">
                                <BsFacebook className='text-blue' />
                            </a>
                            <a href="https://www.youtube.com/mybdjobs">
                                <BsYoutube className='text-red' />
                            </a>
                        </div>
                        <div className='inline-flex  rounded text-lg  border border-blue cursor-pointer'>
                            <span className={`px-1 ${color ? 'bg-blue text-accent-0' : 'text-accent-9 bg-white'}`}
                                onClick={() => setColor(!color)}
                            >ENG</span>
                            <span className={` px-1 ${!color ? 'bg-blue text-accent-0' : 'text-accent-9 bg-white'}`}
                                onClick={() => setColor(!color)}>বাংলা</span>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Topbar