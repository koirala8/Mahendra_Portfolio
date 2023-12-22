import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <Image
                src="/assets/projects/Profile.jpg"
                alt="Profile"
                width='300'
                height='300'
              />

          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Mahendra',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Developer',
                  1000,
                  'Learner',
                  1000,
                  'Gamer',
                  1000
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '1.0em', display: 'inline-block' }}
                repeat={Infinity}
              />
          
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mahebgaming10/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/koirala8'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
