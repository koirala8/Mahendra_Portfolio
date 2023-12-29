import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#363062');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [position, setPosition] = useState('fixed')
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#363062');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 rounded-sm'
          : 'fixed w-full h-20 z-[100] rounded-sm'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>

        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 font-sans text-lg uppercase duration-300 ease-in hover:text-text-[#F5E8C7] hover:scale-110 text-[#F5E8C7]'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} className='text-white'/>
          </div>
        </div>

        <Link href='/'>
          <a>
            <Image
              src='/assets/navLogo.png'
              alt='/'
              width='50'
              height='50'
              className='duration-300 ease-in cursor-pointer hover:scale-110'
            />
          </a>
        </Link>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>

              <div
                onClick={handleNav}
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
              >
                <AiOutlineClose />
              </div>
              <Link href='/'>
                <a>
                  <Image
                    src='/assets/navLogo.png'
                    width='35'
                    height='35'
                    alt='/'
                    className='duration-300 ease-in hover:scale-110'
                  />
                </a>
              </Link>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 font-sans text-lg duration-300 ease-in hover:text-purple-800 hover:scale-100 text-[#5651e5]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/mahebgaming10/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/koirala8'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
