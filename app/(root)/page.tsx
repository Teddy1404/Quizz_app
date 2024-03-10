import React from 'react';
import Image from 'next/image';
import hero from '../../components/images/r1.png';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Dashboard from '@/components/dashboard/dashboard';

const Page = () => {
  return (
    <div className="">
      <SignedIn>
        <div className='mt-10'>
          <Dashboard/>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-yellow-500 rounded-full p-2"> {/* Reduced padding */}
            <Image src={hero} alt='heroimage' height={350} width={350} className="rounded-full" /> {/* Reduced image size */}
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default Page;
