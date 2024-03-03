import React from 'react'
import Image from 'next/image'
import hero from '../../components/images/hero3.jpg'
import {  SignedIn, SignedOut } from '@clerk/nextjs'
import Dashboard from '@/components/dashboard/dashboard'
const page = () => {
  return (
    <div className="">
    <SignedIn>
    <div className='mt-10'>
    <Dashboard/>
    </div>
    </SignedIn>

    <SignedOut>
      <Image src={hero} alt='heroimage' />
    </SignedOut>
    </div>
  )
}

export default page