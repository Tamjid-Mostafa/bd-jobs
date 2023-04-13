import Input from '@components/ui/Input'
import Text from '@components/ui/Text'
import React from 'react'
import cn from 'clsx'
import s from './FindJob.module.css'
import Button from '@components/ui/Button'
import Container from '@components/ui/Container'
const FindJob = () => {
    return (
        <div className={cn(s.root)}>
           <div className='lg:w-80 w-full'>
           <Text
                variant='pageHeading' className='text-accent-0'
            >
                Find your dream job
            </Text>
            <div>
                <Text
                    variant='label'
                    className='text-accent-0'
                >
                    Write oyour occupation
                </Text>
                <Input
                className='rounded-lg'
                />
            </div>
            <div>
                <Text
                    variant='label'
                    className='text-accent-0'
                >
                    Skilled Category
                </Text>
                <select 
                className={cn(s.select)}
                id="skill" name="Skill">
                    <option value="volvo">Skilled</option>
                    <option value="mercedes">Semi Skilled</option>
                    <option value="audi">Less Skilled</option>
                </select>
            </div>
            <div>
                <Text
                    variant='label'
                    className='text-accent-0'
                >
                    Country
                </Text>
                <select 
                className={cn(s.select)}
                id="skill" name="Skill">
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="United Kingdom">United Kingdom</option>
                </select>
            </div>
            <Button
            className='w-full rounded-lg my-10'
            variant='primary'
            >
                Search
            </Button>
           </div>
        </div>
    )
}

export default FindJob