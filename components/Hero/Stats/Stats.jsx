import Text from '@components/ui/Text'
import React from 'react'
import { HiUsers } from 'react-icons/hi2'
import { TiSpanner } from 'react-icons/ti'
import { RiEarthFill } from 'react-icons/ri'
import Container from '@components/ui/Container'
import cn from 'clsx'
import s from './Stats.module.css'
const Stats = () => {
    const stats = [
        {
            name: 'No. of vacancies',
            icon: <HiUsers />,
            count: 130,
            bg: 'bg-red',
            color: 'text-red',
        },
        {
            name: 'No. of jobs',
            icon: <TiSpanner />,
            count: 12,
            bg: 'bg-green',
            color: 'text-green',
        },
        {
            name: 'No. of countries',
            icon: <RiEarthFill />,
            count: 8,
            bg: 'bg-yellow',
            color: 'text-yellow',
        },
    ]
    return (
        <Container className={cn(s.root)}>
            {
                stats.map((stat, i) =>
                    <div key={i}
                    className='flex items-center gap-5'
                    >
                        <div className={cn(`text-accent-0 rounded-full p-5 flex justify-center items-center text-4xl shadow-lg shadow-gray-400 ${stat.bg}`)}>
                            {stat.icon}
                        </div>
                        <div className='text-2xl'>
                            <h3 className='text-xl font-semibold'>
                                {stat.name}
                            </h3>
                            <p className={cn(`text-2xl font-bold ${stat.color}`)}>
                            {stat.count}
                            </p>
                        </div>
                    </div>
                )
            }
        </Container>
    )
}

export default Stats