import React from 'react';
import qfc from './graphics/qualification.jpg';
import { MdOutlineSchool } from "react-icons/md"

function Education() {
  return (
    <div>
      <section className="text-gray-600 body-font font-syne bg-black">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-gray-100 text-center py-10">
          Educational Qualifications
        </h1>
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
          <div className="lg:w-2/6  md:w-1/2 w-5/6 mb-10 md:mb-0 mx-5">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={qfc}
            />
          </div>
            <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6 mx-4">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-800 brightness-150 inline-flex items-center justify-center text-white relative z-10">
                  {/* ----------------------------------- TAG ---------------------------------------- */}
                  <MdOutlineSchool/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-100 mb-1 tracking-wider">
                    Class X
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    Mother Teresa Sr Sec Co-Ed School, CBSE Board <br /> (2019) - 89%
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-800 brightness-150 inline-flex items-center justify-center text-white relative z-10">
                  {/* ----------------------------------- TAG ---------------------------------------- */}
                  <MdOutlineSchool/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-100 mb-1 tracking-wider">
                    Class XII
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    Kempfort Public School , CBSE Board <br /> (2021) - 80.8%
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
                  {/* FOR EXTENDING THE QUALIFICATIONS SECTION */}
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-800 brightness-150 inline-flex items-center justify-center text-white relative z-10">
                  {/* ----------------------------------- TAG ---------------------------------------- */}
                  <MdOutlineSchool/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-100 mb-1 tracking-wider">
                    Bachelor of Technology (CSE)
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    University Institute Of Technology, RGPV Bhopal <br /> (2021 - 2025) - CGPA : 8.22
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
