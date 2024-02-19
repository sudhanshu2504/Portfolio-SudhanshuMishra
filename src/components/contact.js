import React from "react";

function Contact() {
  return (
    <div className="conatiner mx-auto max-w-2xl my-12">
      <div className="flex flex-col bg-orange-600 bg-opacity-90 p-8 rounded-2xl w-auto">
        <p className="sm:text-[18px] text-[14px] uppercase text-white font-syne">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
        <form className="mt-6 flex flex-col gap-8 font-syne">
          <label for="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Name*</span>
            <input type="text" name="name" id="name" title="What's your name?" className="bg-tertiary py-3 px-4 text-black rounded-lg outline-none border-none font-medium"/>
              <span className="text-red-400 mt-2 hidden" id="name-error">Invalid Name!</span>
          </label>
          <label for="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Email*</span>
            <input type="email" name="email" id="email" title="What's your email?" className="bg-tertiary py-3 px-4 text-black rounded-lg outline-none border-none font-medium"/>
          </label>
            <label for="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea rows="5" type="text" name="message" id="message" title="What do you want to say?" className="bg-tertiary py-3 px-4 text-black rounded-lg outline-none border-none font-medium"></textarea>
          </label>
          <button className="flex transition ease-in-out delay-150 hover:-translate-y-1 border hover:scale-110 mx-auto text-white font-bold bg-orange-700 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Send</button>
          </form>
      </div>
    </div>
  );
}

export default Contact;


// <div className="">
    //   <section className="text-gray-600 body-font relative">
    //     <div className="container my-24 w-fit bg-orange-800  mx-auto">
    //       <div className="flex flex-col text-center w-full mb-12">
    //         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
    //           Contact Me
    //         </h1>
    //       </div>
    //       <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //         <div className="flex flex-wrap -m-2">
    //           <div className="p-2 w-1/2">
    //             <div className="relative">
    //               <label for="name" className="leading-7 text-sm text-gray-100">
    //                 Name
    //               </label>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 placeholder="Sudhanshu Mishra"
    //                 className="w-full bg-black bg-opacity-40 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:bg-opacity-80 focus:ring-2 focus:ring-orange-200 focus:text-black text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div>
    //           <div className="p-2 w-1/2">
    //             <div className="relative">
    //               <label for="email" className="leading-7 text-sm text-gray-100">
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 placeholder="sudhanshu250403@gmail.com"
    //                 className="w-full bg-black bg-opacity-40 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:bg-opacity-80 focus:ring-2 focus:ring-orange-200 focus:text-black text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                 />
    //             </div>
    //           </div>
    //           <div className="p-2 w-full">
    //             <div className="relative">
    //               <label for="message" className="leading-7 text-sm text-gray-100">
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 placeholder="**Your Message**"
    //                 className="w-full bg-black bg-opacity-40 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:bg-opacity-80 focus:ring-2 focus:ring-orange-200 focus:text-black h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    //               ></textarea>
    //             </div>
    //           </div>
    //           <div className="p-2 w-full">
                // <button className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                //   Send
                // </button>
    //           </div>
    //           <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>