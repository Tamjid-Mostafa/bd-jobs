import React from 'react'
import cn from 'clsx'
import s from './RightColumn.module.css'
import Image from 'next/image'
import Text from '@components/ui/Text'
import Button from '@components/ui/Button'
const RightColumn = ({ categories }) => {
    return (
        <>
            <div className=''>
                {/* Right Column */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2'>
                    {
                        categories.map((category, i) =>
                            <div key={i} className={cn(s.card)}>
                                <Image width={40} height={40} src={category.icon} />
                                <Text variant='body'>
                                    {category.name}
                                </Text>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                    <div className={cn(s.card2, 'bg-blue my-5 ')}>
                        <div className=' mx-2'>
                            <Image width={100} height={100} src={'/thousand_cv.png'} />
                        </div>
                        <div >
                            <Text
                                variant='body'
                                className='text-accent-0 text-sm'
                            >হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন আমাদের সাইটে।</Text>
                            <Button
                                variant="primary"
                                className="px-3 py-1 rounded-lg"
                            >
                                একাউণ্ট খুলুন
                            </Button>
                        </div>
                    </div>
                    <div className={cn(s.card2, 'bg-purple-700  my-5 md:mb-5 ')}>
                        <div className=' mx-2'>
                            <Image width={100} height={100} src={'/make-bio.png'} />
                        </div>
                        <div >
                            <p
                                variant='body'
                                className='text-accent-0 text-sm'
                            >বায়োডাটা তৈরি করতে চান?</p>
                            <Text
                                variant='body'
                                className='text-accent-0 text-sm'
                            >সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি</Text>
                            <Button
                                variant="primary"
                                className="px-3 py-1 rounded-lg"
                            >
                                একাউণ্ট খুলুন
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightColumn