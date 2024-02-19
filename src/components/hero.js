import React from "react";
import './css/style.css';
import './css/backgrounds.css';
// import Pic from './graphics/character.jpg';
import Background from './background';

export default function hero() {
  const profession = ["Developer || Programmer || Designer"];
  return (
    <div >
      <Background/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex justify-around px-5 py-24 md:flex-row flex-col items-center">
          {/* <div className="lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded pic"
              alt="hero"
              src={Pic}
            />
          </div> */}
          <div className="main h-96 lg:pl-24 md:pl-16 flex justify-center flex-col md:items-start md:text-left">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-black text-center text-gray-200">
              SUDHANSHU MISHRA
            </h1>
            <p className="mb-8 leading-relaxed sm:text-xl font-bold text-center font-syne text-lg text-gray-100">
              {profession}
            </p>
            <div className="flex justify-center">
              <a href='https://linkedin.com/in/sudhanshu-mishra2003'>
                <button className="inline-flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg font-syne">
                  Connect
                </button>
              </a>
              <a href='https://linkedin.com/in/sudhanshu-mishra2003'>
              <button className="ml-4 inline-flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-syne">
                Hire Me
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="bg-orange-900 p-0.5"/>
      
    </div>
  );
}
