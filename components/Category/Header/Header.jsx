import Text from '@components/ui/Text'
import { categories, categories2 } from 'data/constants'
import React from 'react'
import { BsFillTagFill } from 'react-icons/bs'

const Header = ({ color, setColor, setData }) => {
    return (
        <div className='flex justify-between items-center my-10'>
            <div>
                <Text variant='pageHeading' className='flex items-center gap-3'>
                    <BsFillTagFill /> <span>Category</span>
                </Text>
            </div>
            <div>
                <div className='inline-flex  rounded text-lg  border border-blue cursor-pointer'>
                    <span className={`px-3 py-1 ${color ? 'bg-blue text-accent-0' : 'text-accent-9 bg-white'}`}
                        onClick={() => {setColor(!color), setData(categories2)}}
                    >Special skilled</span>
                    <span className={` px-3 py-1 ${!color ? 'bg-blue text-accent-0' : 'text-accent-9 bg-white'}`}
                        onClick={() => {setColor(!color), setData(categories)}}>General</span>
                </div>
            </div>
        </div>
    )
}

export default Header