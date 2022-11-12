import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { Spiral as Hamburger } from 'hamburger-react'
type Props = {}

export default function Sidear(){
    const [text] = useTypewriter({
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
                <Disclosure.Button className="absolute top-1 left-1 inline-flex items-center peer justify-center rounded-full p-2 text-black group z-30 ">
                    <Hamburger size= {20} />
                </Disclosure.Button>

                <Disclosure.Panel className=" lg:w-1/5 overflow-auto touch-pan-y p-6 w-full h-screen bg-[rgb(36,36,36)] fixed top-0 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 z-20">
                    <div className="flex justify-center pb-6">
                        <span className="text-white font-medium" >{text}</span>
                        <Cursor cursorColor="F7AB0A" />
                    </div>
                    <div className="pb-6 pt-6 flex flex-col items-center text-center
                    "><BackgroundCircles />
                        <Image
                            className="flex justify-center h-32 w-32 mx-auto rounded object-cover"
                            src="/selfie.png"
                            alt="selfie"
                            width={200}
                            height={200} />
                    </div>
                    <div className="pt-5 mt-5 z-30 lg:pl-0
                    justify-items-center grid lg:grid-flow-row
                    grid-flow-col
                    lg:grid-cols-1
                    justify-center">
                        <Link href="about">
                            <button className="navButton">About</button>
                        </Link>
                        <Link href="#skills">
                            <button className="navButton">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="navButton">Projects</button>
                        </Link>
                        <Link href="#Contact">
                            <button className="navButton">Contact</button>
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