import cn from 'clsx'
import s from './Bdesh.module.css';

import React from 'react'
import Image from 'next/image';
import Text from '@components/ui/Text';
import Container from '@components/ui/Container';

const Bdesh = () => {
    return (
        <section className="bg-primary-2 py-20">
            <Container className="flex gap-10">
                <div class="col-sm-6">
                    <Text variant='pageHeading'>Bdesh Jobs, in trust and reliance</Text>
                    <div className="rounded-lg">

                        <a data-fancybox="" href="https://youtu.be/e3wpqRBmWGU">
                            <Image
                                width={600}
                                height={100}
                                src="/promo-video-home.jpg" alt="promotional Video" className="rounded-lg" />
                        </a>
                    </div>
                </div>
                <div>
                    <Text variant='pageHeading'>
                        Jointly Organized
                    </Text>
                    <div className='flex gap-5'>
                        <div className='bg-white px-4 py-2 rounded-lg shadow-lg'>
                            <a href="">
                                <Image
                                    width={150}
                                    height={100}
                                    src="/Bdjobs-logo.png" alt="Bdjobs-logo" className="rounded-lg" />
                            </a>
                        </div>
                        <div className='bg-white px-4 py-2 rounded-lg shadow-lg'>
                            <a href="">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/IOM.png"
                                    alt="IOM-logo" className="rounded-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Bdesh