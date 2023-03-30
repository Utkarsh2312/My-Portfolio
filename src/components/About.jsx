import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              # About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
            <div className='sm:text-left text-4xl font-bold'>
              <p>Hi. I'm Utkarsh, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am currently a 3rd year undergraduate in Information Science 
                 & Engineering. I like solving real world problems using my analytical
                 skills. I'm a Full Stack Developer with a passion for creating innovative
                 solutions using cutting-edge technologies. My interest in Blockchain technology 
                 has fueled my drive to explore new opportunities in the emerging field of decentralized 
                 applications. As a Competitive Programming enthusiast, I enjoy pushing my limits to solve 
                 complex problems efficiently and effectively. I want to join an interactive 
                 organization that offers a constructive workplace to learn new technologies and gives 
                 the opportunity to grow professionally.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About