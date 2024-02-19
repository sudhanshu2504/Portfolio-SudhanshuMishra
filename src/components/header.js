// import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import React from "react";
import { GrProjects } from "react-icons/gr";
import "./css/style.css";
import "./css/backgrounds.css";

const navigation = [
  { name: 'Home', href: '/' , image: <img src={<GrProjects/>} alt='Portfolio' /> },
  { name: 'About', href: '/' , image: <img src={<GrProjects/>} alt='Portfolio' />},
  { name: 'Projects', href: '/' , image: <img src={<GrProjects />} alt='Portfolio' />},
  { name: 'Contact', href: '/' , image: <img src={<GrProjects/>} alt='Portfolio' />},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="navbar_bg sticky top-0 z-20 backdrop-filter">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                {/* <div className="flex flex-shrink-0 items-center"> */}
                  {/* <img
                    className="h-8 w-auto logo"
                    src={Logo}
                    alt="Sudhanshu Mishra"
                  /> */}
                  <h1 className="title-font sm:text-xl text-3xl font-black my-auto align-items-center text-center text-gray-200">
                  Portfolio.
                </h1>
                {/* </div> */}
                <div className="hidden justify-center sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                      
                        key={item.name}
                        href={item.href}
                        className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium font-syne'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <div className="flex row mx-1">
                        {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium font-syne'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


