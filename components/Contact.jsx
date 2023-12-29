import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full py-5 lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='mb-4 ml-3 font-sans text-4xl font-bold text-[#F5E8C7] uppercase'>
          Contact
        </p>
          <div className='grid gap-8 lg:grid-cols-5'>
          {/* left */}
          <div className='w-full h-full col-span-3 p-4 text-white shadow-xl lg:col-span-2 rounded-xl'>
            <div className='h-full lg:p-4 '>
              <div>
                <Image
                  className='object-fill duration-300 ease-in rounded-xl hover:scale-105'
                  src='/assets/contact.jpg'
                  alt='/'
                  width='200'
                  height='250'
                />
              </div>
              <div>
                <h2 className='py-2'>Mahendra Koirala</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='pt-8 uppercase'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/mahebgaming10/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/koirala8'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='w-full h-auto col-span-3 shadow-xl rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm text-white uppercase'>Name</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm text-white uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm text-white uppercase'>Email</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm text-white uppercase'>Subject</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm text-white uppercase'>Message</label>
                  <textarea
                    className='p-3 border-2 border-gray-300 rounded-lg'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110'>
                <HiOutlineChevronDoubleUp
                  className='text-[#F5E8C7]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
