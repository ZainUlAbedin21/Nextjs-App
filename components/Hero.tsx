"use client"
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {

  const handleScroll=()=>{

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Find Your Dream Mobile order quickly
            </h1>
            <p className='hero__subtiltle'>
                Streamline your Mobile Order experience with our effortless process.
            </p>

          <CustomButton
          title="Explore Phones"
          containerStyles="bg-primary-blue
          text-white rounded-full mt-10"
          handleClick={handleScroll}
          />

        </div>
<div className="hero__image-container">
<div className="hero__image">
<Image src="/hero.png" alt="hero"
fill className="object-contain"/>
</div>
<div className='hero__image-overlay'/>

</div>

    </div>
  )
}

export default Hero
