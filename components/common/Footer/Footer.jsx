import React from 'react'
import cn from 'clsx'
import s from './Footer.module.css'
import Container from '@components/ui/Container'
import Text from '@components/ui/Text'
import Link from 'next/link'
import Image from 'next/image'
import { Footer_Data } from 'data/constants'

const Footer = () => {
  return (
    <div className={cn(s.root)}>
      <>
        <Container className={cn(s.container)}>
          {
            Footer_Data.map((item, i) =>
              <div key={i}>
                <Text variant='sectionHeading'>
                  {item.name}
                </Text>
                <div>
                  {
                    item.slugs.map((m, i) =>
                      <>
                        <div key={i} className='mb-2'>
                          <Link href={m.href}>
                            {m.title}
                          </Link>
                        </div>
                        {
                          m.img && <Image width={160} height={160} src={m.img} />
                        }
                        {
                          m.icon && (
                            <div className='flex items-center gap-4'>
                              <Image width={40} height={40} src={m.icon} />
                              <div className=''>
                                <p>{m.name}</p>
                                <p className='text-xl font-bold text-pink'>{m.number}</p>
                              </div>
                            </div>
                          )
                        }
                      </>
                    )
                  }
                </div>
              </div>
            )
          }
        </Container>
      </>
    </div>
  )
}

export default Footer