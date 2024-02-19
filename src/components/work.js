import React from "react";
import Gamezone from './graphics/Gamezone.png';
import WeatherApp from './graphics/GetWeather.png';
import NoI from './graphics/NewsOfIndia.png';
import QRcode from './graphics/QRcode.png';
import Fitness from './graphics/Fitness.png';
import TX from './graphics/TX.png';

export default function work() {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-80 h-full bg-orange-600"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3">
              <h3 className="sm:w-2/5 text-gray-400 uppercase font-syne font-medium title-font mb-2 sm:mb-0">
                What i built so far,
              </h3>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-2">
              <h1 className="sm:w-2/5 text-gray-100 font-black title-font text-4xl mb-2 sm:mb-0">
                Past Projects
              </h1>
            </div>
              <div className="text-base font-syne leading-relaxed mt-2 sm:w-full text-gray-300 mb-6 max-w-2xl">
              I have created following projects that showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live deployment. It reflects my ability to work with different technologies, and manage my projects effectively.
              </div>
          </div>
          <div className="flex flex-wrap justify-center font-syne sm:-m-4  -mb-10 -mt-4">
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Gamezone}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                Ecommerce Gaming Accessories Store
              </h2>
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : ReactJS , Bootstrap , GSAP </h3>
                <h3>Backend : NodeJS , MongoDB</h3>
              </div>
              <a href="https://thegamezonestore.netlify.app" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 font-semibold hover:font-bold hover:border-orange-900 hover:scale-[120%] items-center mt-3 align-center">
                Visit Here
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center scale-75 brightness-150 h-full w-full"
                  src={TX}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                TeamXSpark Website
              </h2>
              {/* <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : ReactJS , Tailwind , GSAP </h3>
              </div> */}
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Under Development </h3>
              </div>
              <a href="/" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 hover:border-orange-900 hover:scale-[120%] hover:font-bold font-semibold items-center mt-3 align-center">
                Coming Soon
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={NoI}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                Realtime News Application
              </h2>
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : HTML , CSS , JS , Bootstrap </h3>
                <h3>Backend : NewsAPI</h3>
              </div>
              <a href="https://sudhanshu2504.github.io/NewsOfIndia" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 hover:scale-[120%] hover:font-bold font-semibold items-center mt-3">
                Visit Here
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={WeatherApp}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                Weather Forecast Application
              </h2>
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : HTML , CSS , JS , Bootstrap </h3>
                <h3>Backend : WeatherAPI</h3>
              </div>
              <a href="https://sudhanshu2504.github.io/weatherapp" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 hover:scale-[120%] hover:font-bold font-semibold items-center mt-3">
                Visit Here
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src= {QRcode}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                QR Code Generator
              </h2>
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : ReactJS , Basic CSS </h3>
                <h3>Backend : QR Code modules</h3>
              </div>
              <a href="https://qr-codegenerator01.netlify.app" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 hover:scale-[120%] hover:font-bold font-semibold items-center mt-3">
                Visit Here
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-3 md:w-1/3 sm:mb-0 mb-6 hover:border border-gray-500 bg-blend-normal hover:shadow-inner shadow-xl hover:shadow-gray-800 rounded-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Fitness}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                Fitness Club Website
              </h2>
              <div className="text-base leading-relaxed mt-2 text-gray-300">
                <h3>Tech Stack Used - </h3>
                <h3>Frontend : HTML , CSS , JS , Bootstrap </h3>
                <h3>Backend : NA </h3>
              </div>
              <a href="http://samplegymwebsite.netlify.app" className="text-orange-500 inline-flex transition-all ease-in-out delay-150 hover:translate-x-2 hover:scale-[120%] hover:font-bold font-semibold items-center mt-3">
                Visit Here
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
