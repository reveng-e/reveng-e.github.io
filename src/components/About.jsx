import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> "We are here to make a dent in this 
              universe, otherwise why else even be here?" 
              - Steve Jobs 
              </p>
            </div>
            <div className='text-2xl'>
              <p>I am passionate about contributing to software that makes everyone's 
              lives easier. My experience includes working as a research assistant 
              and developing a game that could be helpful in the medical sector. </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
