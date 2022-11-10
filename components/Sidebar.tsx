import React, { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'


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
                    <div className="flex justify-center pb-6">
                        <span >{text}</span>
                        <Cursor cursorColor="F7AB0A" />
                    </div>
                        <Image
                        className="relative rounded-fill h-32 w-32 mx-auto rounded mb-6"
                        src="/selfie.png"
                        alt="selfie"
                        width={200}
                        height={200}/>
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
                            className="flex justify-center pt-6;">
                            <SocialIcon
                                url="https://linkedin.com/in/hollowaydaniel"
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
                                url="https://github.com/vendettistudios" />
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
                            />
                        </motion.div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}