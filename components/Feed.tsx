import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
export default function Feed() {
  return (
    <section className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <ArrowPathIcon className='h-8 w-8 cursor-pointer text-twitter 
        transition-all duration-500 ease-out hover:rotate-180 active:scale-125  
        '/>
      </div>

      {/* TweetBox */}
      <div>
        <TweetBox/>
      </div>
    </section>
  )
}
