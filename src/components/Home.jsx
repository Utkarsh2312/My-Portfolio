import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl sm:text-3xl'>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hii, my name is...")
                  .pauseFor(1000)
                  .typeString("")
                  .start();
              }}
            />
        </p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
            <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(3000)
                    .typeString("Utkarsh Shrivastava")
                    .pauseFor(1000)
                    .start();
                }} 
            />
        </h1>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#8892b0]'>
          <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(6000)
                  .typeString(
                    "A Full Stack Web Developer who likes building amazing websites"
                  )
                  .pauseFor(1000)
                  .start();
              }}
            />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a Full Stack Developer with a passion for creating innovative solutions using cutting-edge technologies. 
          My interest in Blockchain technology has fueled my drive to explore new opportunities in the emerging field of decentralized applications.
          As a Competitive Programming enthusiast, I enjoy pushing my limits to solve complex problems efficiently and effectively. 
          My goal is to leverage my diverse skill set to create meaningful contributions to the tech industry.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home