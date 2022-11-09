import React from "react";
import { Fragment } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";


type Props = {}

export default function Sidebar() {
    return (
        <div>
            <Disclosure defaultOpen as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-full p-2 text-white hover:bg-gray-900 hover:text-white  hover:ring-2 hover:ring-inset hover:ring-white group md:hidden hover:motion-safe:animate-spin">
                    <GiHamburgerMenu
                        className="block md:hidden h-6 w-6"
                        aria-hidden="true"
                    />
                </Disclosure.Button>

                <Disclosure.Panel className= "md:w-full overflow-auto touch-pan-y p-6 w-1/2 h-screen bg-gray-400 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <Disclosure.Button as={Fragment}>
                        <CgClose className="block md:hidden h-6 w-6 text-black hover:bg-gray-300 rounded-full"/>
                    </Disclosure.Button>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}