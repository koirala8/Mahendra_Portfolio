// Projects.jsx

import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gradient-to-r from-[#818FB4] py-4'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 '>
        <p className='mb-4 font-sans text-4xl font-bold text-[#F5E8C7] uppercase'>
          Projects
        </p>
        <div className='grid gap-8 m-6 md:grid-cols-1 text-[#F5E8C7]'>
          <ProjectItem
            title='Mini Spotify Jamming'
            backgroundImg='/assets/projects/jamming.png'
            projectUrl='/jamming'
            tech='React JS'
          />
          <ProjectItem
            title='Quote API'
            backgroundImg='/assets/projects/QuoteApi.png'
            projectUrl='/quoteApi'
            tech='React JS'
          />
          <ProjectItem
            title='Family Restaurant, Akron-Ohio'
            backgroundImg='/assets/projects/Family.png'
            projectUrl='/family'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
