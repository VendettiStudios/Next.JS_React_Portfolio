import React, { useState, Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'
type Props = {}

export default function Sidear({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "#Welcome",
            "Dev-Life.tsx",
            "<Hire Me/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-1 left-1inline-flex items-center peer justify-center rounded-full p-2 text-white group hover:motion-safe:animate-spin z-10 ">
                    {/* <GiHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                    /> */}
                    <Hamburger size={20} />
                </Disclosure.Button>

                <Disclosure.Panel className=" lg:w-1/5 overflow-auto touch-pan-y p-6 w-full h-screen bg-[rgb(36,36,36)] fixed top-0 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 z-0">
                    <Disclosure.Button as={Fragment}>
                        <CgClose className="block md:hidden h-6 w-6 text-black hover:bg-gray-300 rounded-full" />
                    </Disclosure.Button>
                    <div className="flex justify-center pb-6">
                        <span className="text-white font-medium" >{text}</span>
                        <Cursor cursorColor="F7AB0A" />
                    </div>
                    <div className="pb-6 pt-6 flex flex-col spaye-y-8 items-center text-center
                    "><BackgroundCircles />
                        <Image
                            className="flex justify-center h-32 w-32 mx-auto rounded object-cover"
                            src="/selfie.png"
                            alt="selfie"
                            width={200}
                            height={200} />
                    </div>
                    <div className="pt-5 mt-5 z-20 lg:pl-0
                    justify-items-center grid lg:grid-flow-row
                    grid-flow-col
                    lg:grid-cols-1
                    justify-center">
                        <Link href="about">
                            <button className="navButton pl-6
                            ml-2 mr-1
                            lg:mx-auto
                            lg:pr-6">About</button>
                        </Link>
                        <Link href="#skills">
                            <button className="navButton pl-3 md:mx-2
                            lg:pr-5
                            ">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="navButton pl-3
                            ml-1 lg:mx-auto lg:pl-6
                            lg:pr-5">Projects</button>
                        </Link>
                        <Link href="#Contact">
                            <button className="navButton pl-3
                            ml-1 lg:mx-auto lg:pl-6
                            lg:pr-5">Contact</button>
                        </Link>
                    </div>

                    <div className="">
                        <motion.div
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            className="flex justify-center pt-6 mt-6;">
                            <SocialIcon
                                url="https://linkedin.com/in/hollowaydaniel"
                                fgColor="white"
                                bgColor="transparent"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center pt-6"
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1.5,
                            }}>
                            <SocialIcon
                                url="https://github.com/vendettistudios"
                                fgColor="white"
                                bgColor="transparent"/>
                        </motion.div>
                        <motion.div className="flex justify-center pt-6"
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1.5,
                            }}>
                            <SocialIcon
                                network="email"
                                fgColor="white"
                                bgColor="transparent"
                            />
                        </motion.div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}