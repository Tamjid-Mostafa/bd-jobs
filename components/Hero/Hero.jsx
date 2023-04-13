import BG from '@components/ui/BG/BG'
import Container from '@components/ui/Container'
import React from 'react'
import cn from 'clsx'
import s from './Hero.module.css'
import FindJob from './FindJob'
import CountryWiseVacancies from './CountryWiseVacancies'
import ImageSlider from './ImageSlider'
import Stats from './Stats'

const Hero = () => {
    return (
        <main className={cn(s.root,)}>
            <Container clean >
                <div className='flex
           lg:flex-nowrap flex-wrap w-full justify-center'>
                    <div className='lg:order-1'>
                        <ImageSlider />
                    </div>
                    <div className='lg:order-0 w-full'>
                        <FindJob />
                    </div>
                    <div className='lg:order-1 w-full'>
                        <CountryWiseVacancies />
                    </div>
                </div>
                <div className=''>
                    <Stats />
                </div>
            </Container>
        </main>
    )
}

export default Hero