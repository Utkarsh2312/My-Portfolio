import React from 'react'

import C from  '../assets/C.png';
import Cpp from '../assets/Cpp.png';
import dsa from '../assets/dsa.png';
import oops from '../assets/oops.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwindcss from '../assets/tailwind.png';
import react1 from '../assets/react1.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import restapi from '../assets/restapi.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
         {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '># Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={C} alt="C icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Cpp} alt="Cpp icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={dsa} alt="dsa icon" />
                  <p className='my-4'>Data Structures & Algorithms</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={oops} alt="OOPs icon" />
                  <p className='my-4'>Object-Oriented Programming</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwindcss} alt="Tailwaing CSS icon" />
                  <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react1} alt="React icon" />
                  <p className='my-4'>React Js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="Node Js icon" />
                  <p className='my-4'>Node Js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongo} alt="MongoDB icon" />
                  <p className='my-4'>Mongo DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={restapi} alt="REST API icon" />
                  <p className='my-4'>REST API</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Skills