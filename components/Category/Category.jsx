import React, { useState } from 'react'
import cn from 'clsx'
import s from './Category.module.css'
import Container from '@components/ui/Container'
import Text from '@components/ui/Text'
import { BsFillTagFill } from 'react-icons/bs'
import Header from './Header/Header'
import Image from 'next/image'
import RightColumn from './RightColumn/RightColumn'
import { categories } from 'data/constants'
const Category = () => {
    const [color, setColor] = useState(false);

    const [data, setData] = useState(categories)




    return (
        <div>
            <Container className='grid md:grid-cols-3 grid-cols-1'>
                {/* Right Side */}
                <div className='col-span-2'>
                    <Header
                        setData={setData}
                        color={color}
                        setColor={setColor}
                    />
                    <RightColumn categories={data} />
                </div>
                {/* Left Side */}
                <div className='flex flex-col md:ml-10 ml-0 md:my-32 my-10 gap-5'>
                    <ul className={cn(s.card)}>
                        <li>
                            <Text>
                                বিদেশ জবস্ এর গাইডলাইন
                            </Text>
                        </li>
                        <li>
                            "বিদেশ জবস্"-নির্দেশিকা

                        </li>
                        <li>
                            বিদেশে যাওয়ার গাইডলাইন

                        </li>
                        <li>
                            বিদেশে চাকরির পূর্ব প্রস্তুতি

                        </li>
                        <li>
                            বিদেশে যাওয়ার প্রাসঙ্গিক কাজ

                        </li>
                        <li>
                            বিদেশের যাত্রাপথে করনীয়
                        </li>
                        <li>
                            বিদেশে জীবনযাত্রা
                        </li>
                    </ul>
                    <ul className={cn(s.card)}>
                        <li>
                            <Text>
                                বিদেশ জবস্ এর গাইডলাইন
                            </Text>
                        </li>
                        <li>
                            "বিদেশ জবস্"-নির্দেশিকা

                        </li>
                        <li>
                            বিদেশে যাওয়ার গাইডলাইন

                        </li>
                        <li>
                            বিদেশে চাকরির পূর্ব প্রস্তুতি

                        </li>
                        <li>
                            বিদেশে যাওয়ার প্রাসঙ্গিক কাজ

                        </li>
                        <li>
                            বিদেশের যাত্রাপথে করনীয়
                        </li>
                        <li>
                            বিদেশে জীবনযাত্রা
                        </li>
                    </ul>
                    <div></div>
                </div>
            </Container>
        </div>
    )
}

export default Category