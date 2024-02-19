import React from 'react'

function Intro() {
  return (
    <div className="container px-5 py-24 mx-auto bg-black bg-opacity-60">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-56 h-full bg-orange-600"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3">
              <h3 className="sm:w-2/5 text-gray-400 font-syne uppercase font-medium title-font mb-2 sm:mb-0">
                Introduction
              </h3>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col  mb-2">
              <h1 className="sm:w-2/5 text-gray-100 font-black title-font text-[35px] mb-2 sm:mb-0">
                Overview
              </h1>
            </div>
              <div className="text-base leading-relaxed mt-2 sm:w-full text-gray-300 font-syne mb-6 max-w-xl">
              <p class="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify" >I am <span className='text-orange-600 font-bold text-[25px]'>SUDHANSHU MISHRA</span>, a highly motivated and dedicated undergraduate student pursuing <span>B.Tech</span> from <span className='text-orange-600 text-[20px]'>University Institute of Technology, Bhopal</span>, with an unwavering passion for <span className='text-orange-600 underline text-[20px]'>Competitive Programming</span>, <span className='text-orange-600 underline text-[20px]'>Problem Solving</span> and <span className='text-orange-600 underline text-[20px]'>Web Development</span>. With a strong academic foundation and I am committed to pushing the boundaries of what can be achieved in the digital world.</p>
              </div>
          </div>
    </div>
  )
}

export default Intro
