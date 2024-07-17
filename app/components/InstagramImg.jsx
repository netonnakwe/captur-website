import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image src={socialImg} alt="/" className='w-full h-full'/>
        <div className='absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 group'>
            {/* Overlay */}
            <p className='text-gray-300 group-hover:block mt-2 ml-2'><FaInstagram/></p>
            </div>
    </div>
  )
}

export default InstagramImg