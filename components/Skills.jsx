import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full h-[100vh]'>
      <div className='max-w-[1240px] px-4 mx-auto flex flex-col justify-center h-full'>
        <h2 className='font-sans justify-center text-4xl font-bold text-[#F5E8C7] uppercase'>
          Skills
        </h2>
        <span className='py-2 font-sans text-2xl text-[#F5E8C7]'>Technical Skills</span>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 text-[#F5E8C7]'>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/html.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/css.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/javascript.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/react.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/tailwind.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/firebase.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/firebase.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image src='/assets/skills/nextjs.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
