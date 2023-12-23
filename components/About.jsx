import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div
      id='about'
      className='flex items-center w-full p-4 py-16 font-sans bg-gradient-to-r from-gray-100 to-gray-300'
    >
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-8'>
        <div className='col-span-1'>
          <p className='mb-4 font-sans text-4xl font-bold text-[#5651e5] uppercase'>
            About Me
          </p>
          <span className='py-2 font-sans text-2xl text-purple-800'>Introduction</span>
          <p className='py-2 text-lg text-gray-800'>
            A passionate and dynamic full-stack web developer hailing from the beautiful landscapes of Nepal. Currently pursuing a Bachelor's degree in Computer Science at the University of Louisiana Monroe, I'm expected to graduate in August 2024.          </p>
          <span className='py-2 font-sans text-2xl text-purple-800'>Passion and Motivation</span>
          <p className='py-2 text-lg text-gray-800'>
            Web development, to me, is like sculpting in the digital realm, where each line of code shapes a unique experience. What excites me most is the power to transform ideas into interactive, user-friendly realities. It's the thrill of finding the perfect blend of creativity and functionality, of bringing a vision to life with just a few keystrokes.
            One area that fuels my passion is crafting seamless user interfaces using JS frameworks like React. It's like painting a canvas with pixels, making every click and animation a part of a user's digital journey. I find joy in the versatility of languages like Python and the precision demanded by SQL when designing robust backend systems.        
            </p>
            <span className='py-2 font-sans text-2xl text-purple-800'>Journey</span>
          <p className='py-2 text-lg text-gray-800'>
            My journey into computer science began in my home, where early access to a computer ignited a passion that shapes my career today. Programming, video editing, and gaming weren't just hobbies; they were gateways to endless possibilities. Thanks to my parents' wise decision to expose me to technology early on, my childhood curiosity evolved into a lifelong pursuit.
            Today, as I dive into coding and design, I carry the echoes of those early days. Each line of code reflects the enthusiasm of a child discovering the magic of computers. It's not just a career; it's a tribute to the curiosity nurtured in my youth—a journey shaped by the foresight of parents who believed in the transformative power of technology. As I navigate web development's complexities, I'm not just a programmer; I'm a storyteller, an explorer, and a lifelong enthusiast grateful for the early exposure that turned fascination into a meaningful career.
          </p>
        </div>
        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
          <Image 
          src='/assets/about.jpg' 
          className='rounded-xl' 
          alt='Profile' 
          width='100'
          height='100'
          />
        </div>
      </div>
    </div>
  );
};

export default About;