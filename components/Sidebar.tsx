import React, { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { SocialIcon } from "react-social-icons"


type Props = {}

export default function Sidear() {
    return (
        <div>
            <Disclosure defaultOpen as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-full p-2 text-white hover:bg-gray-900 hover:text-white  hover:ring-2 hover:ring-inset hover:ring-white group md:hidden hover:motion-safe:animate-spin">
                    <GiHamburgerMenu
                        className="block md:hidden h-6 w-6"
                        aria-hidden="true"
                    />
                </Disclosure.Button>

                <Disclosure.Panel className=" lg:w-2/12 overflow-auto touch-pan-y p-6 w-full h-screen bg-gray-400 fixed top-0 -left-96 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <Disclosure.Button as={Fragment}>
                        <CgClose className="block md:hidden h-6 w-6 text-black hover:bg-gray-300 rounded-full" />
                    </Disclosure.Button>
                    <div className="">
                        <div className="flex justify-center pt-6;">
                            <SocialIcon
                            url="https://linkedin.com/in/hollowaydaniel"
                        /></div>
                        <div className="flex justify-center pt-6">
                            <SocialIcon
                            url="https://github.com/vendettistudios" /></div>
                        <div className="flex justify-center pt-6"> <SocialIcon
                            network="email"
                        />
                        </div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}