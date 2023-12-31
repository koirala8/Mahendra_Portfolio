import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='home' className='py-4'>
      <div className='w-[110%] h-[110vh] text-center'>
        <div className='flex flex-col items-center justify-center w-full h-full p-2 my-10'>
          <div>
              <Image
                src="/assets/projects/Profile.jpg"
                alt="Profile"
                width='200'
                height='200'
                className='mt-5 rounded-full'
              />
            <h1 className='py-4 text-[#F5E8C7]'>
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
                  style={{ fontSize: '0.85em', display: 'inline-block' }}
                  repeat={Infinity}
                />

              </span>
            </h1>
            <h2 className='py-2 text-[#F5E8C7]'>A Full-Stack Web Developer</h2>
            <p className='py-4 text-[#F5E8C7] sm:max-w-[70%] m-auto'>
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-[#F5E8C7]'>
              <a
                href='https://www.linkedin.com/in/mahebgaming10/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/koirala8'
                target='_blank'
                rel='noreferrer'
              >
                <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                  <FaGithub />
                </div>
              </a>
              <Link href='/#contact'>
                <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='/resume'>
                <div className='p-6 text-3xl duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Main;
