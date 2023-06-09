import React from 'react'
import cn from 'clsx'
import Footer from '../Footer'
import Navbar from '../Navbar'
import s from './Layout.module.css'
import { useRouter } from 'next/router'

const Layout = ({
  children,
  pageProps: { categories = [], ...pageProps },
}) => {

  const router = useRouter()
  
  return (
    <div className={cn(s.root)}>
      {router.pathname !== '/404' && (
        <>
        {
          router.pathname !== '/request-demo' && (
            <Navbar />
          )
        }
        </>
      )}
      <main className="">{children}</main>
      {router.pathname !== '/404' && (
        <Footer />
      )}
    
    </div>
  )
}

export default Layout