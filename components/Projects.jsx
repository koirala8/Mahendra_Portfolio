import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Jamming from '../public/assets/projects/jamming.png';
import QuoteApi from '../public/assets/projects/QuoteApi.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gradient-to-r from-gray-100 to-gray-300'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 '>
        <p className='mb-4 font-sans text-4xl font-bold text-[#5651e5] uppercase'>
          Projects
        </p>
        <span className='py-2 font-sans text-2xl text-purple-800'>Project Thumbnails</span>
        <div className='grid gap-8 m-4 md:grid-cols-2'>
          <ProjectItem
            title='Mini Spotify Jamming'
            backgroundImg={Jamming}
            projectUrl='/jamming'
            tech='React JS'
          />
          <ProjectItem
            title='Quote API'
            backgroundImg={QuoteApi}
            projectUrl='/quoteApi'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
