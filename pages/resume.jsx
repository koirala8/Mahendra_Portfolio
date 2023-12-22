import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Koirala | Resume</title>
        <meta
          name='description'
          content='I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Mahendra Koirala</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mahebgaming10/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/koirala8'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='py-4 text-xl font-bold tracking-wider text-center uppercase'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments.
        </p>

        {/* Skills */}
        <div className='py-4 text-center'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Work Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='italic font-bold'>
            Software Engineering Intern Tech Innovators, Inc.
            </span>
            <span className='px-2'>|</span>Nepal
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (May 2022 - July 2023)</p>
          <ul className='py-1 leading-relaxed list-disc list-outside px-7'>
            <li>
              Crafted and maintained front-end web apps with HTML, CSS, JavaScript, jQuery, and ReactJS. Deployed on AWS
              and Heroku, consistently exceeding customer satisfaction through creative problem-solving.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='italic font-bold'>
              Full-Stack Developer Louisiana Economic Development Grant IBM, United States
            </span>
            <span className='px-2'>|</span>Monroe, LA
          </p>
          <p className='py-1 italic'> Project Management and Software Developer (Aug 2023 - Current)</p>
          <ul className='py-1 leading-relaxed list-disc list-outside px-7'>
            <li>
              Developed and maintained front-end web apps (HTML, CSS, JavaScript, jQuery, ReactJS), deploying seamlessly 
              on AWS and Heroku. Consistently exceeded customer satisfaction through creative problem-solving.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Personal Projects
        </h5>
        
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>ULM Baseball Team Analytics Automation</span>
            <span className='px-2'>|</span>Louisiana
          </p>
          <p className='py-1 italic'>Data Analytics (Aug 2023 - Dec 2023)</p>
          <ul className='py-1 leading-relaxed list-disc list-outside px-7'>
            <li>
              Collaborated with Brewer Hendrix, ULM baseball team Director of Analytics. Automated Trackman analytics data 
              processing using Python and FTP. Created a user-friendly POWER BI interface for pitch and batted ball metric 
              analysis.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Quote API using Express.jsn</span>
            <span className='px-2'>|</span>Louisiana
          </p>
          <p className='py-1 italic'>API Interaction (Aug 2023 - Dec 2023)</p>
          <ul className='py-1 leading-relaxed list-disc list-outside px-7'>
            <li>
              Developed a straightforward Quote API using Express.js, featuring routes for retrieving random quotes, person￾based quotes, and adding new quotes. Integrated a basic front-end site for seamless API interaction. 
              Technologies employed include Express.js, Node.js, HTML, CSS, and JavaScript
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Pre-Medical Advisory Committee (PMAC) Process Automation</span>
            <span className='px-2'>|</span>Louisiana
          </p>
          <p className='py-1 italic'>UI/UX Designer (June 2022 - Aug 2022)</p>
          <ul className='py-1 leading-relaxed list-disc list-outside px-7'>
            <li>
              Collaborated with Team members to automate, University of Louisiana, PMAC Medical School applications, enhancing 
              communication through web forms and scheduling algorithms.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
