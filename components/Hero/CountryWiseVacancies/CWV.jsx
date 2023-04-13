import React from 'react'
import cn from 'clsx'
import s from './CWV.module.css'
import Container from '@components/ui/Container'
import Text from '@components/ui/Text'
import Link from 'next/link'
import Button from '@components/ui/Button'
import { FcManager } from 'react-icons/fc'
import Image from 'next/image'
const CWV = () => {



  return (
    <div className={cn(s.root)}>
      <Container>
        <Text
          variant='pageHeading' className='text-accent-0'
        >
          Country wise vacancies
        </Text>
        <ul className='text-accent-0 text-lg flex flex-col gap-3'>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=310'}>
              United Arab Emirates (45)

            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=276'}>
              Saudi Arabia (35)


            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=202'}>
              Japan (25)


            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=287'}>
              South Korea (11)

            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=222'}>
              Malaysia (6)


            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/jobsearch.asp?locationId=252'}>
              Oman (6)


            </Link>
          </li>
          <li>
            <Link href={'https://bdesh.bdjobs.com/locationwisejobs.asp'}>
              All Countries

            </Link>
          </li>
          <li>
            <Button
              variant="primary"
              className="rounded-lg px-2"
            >
              <FcManager className='text-6xl mr-5 ' />Submit your Biodata
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              className="rounded-lg text-accent-8 flex flex-col px-10"
            >
              <span>
                <Image 
                width={100}
                height={100}
                src={'/bdesh_jatra.svg'}
                />
              </span>
             <span>অভিবাসন বিষয়ক তথ্য</span>

            </Button>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default CWV