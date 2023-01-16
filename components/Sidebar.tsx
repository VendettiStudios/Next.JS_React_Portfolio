import React, { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { Spiral as Hamburger } from 'hamburger-react'

type Props = {}

export default function Sidebar() {
    const [text] = useTypewriter({
        words: [
            "#Welcome",
            "Dev-Life.tsx",
            "<Hire Me/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <Disclosure as="nav">
                <nav>
                    <Disclosure.Button className="hamburger peer group">
                        <Hamburger toggled={isOpen} toggle={setOpen} size={20}
                        />
                    </Disclosure.Button>

                    <Disclosure.Panel className="sideBar bg-[rgb(36,36,36)] peer:transition">
                        <div className="typeWriter">
                            <span className="" >{text}</span>
                            <Cursor cursorColor="F7AB0A" />
                        </div>

                        <div className="profileContainer">
                            <BackgroundCircles />
                            <Image
                                className="selfie"
                                src="/selfie.png"
                                alt="selfie"
                                width={200}
                                height={200} />
                        </div>

                        <div className="navList" onClick={() => setOpen(!isOpen)}>
                            <Link href="#about">
                                <Disclosure.Button className="navButton">About</Disclosure.Button>
                            </Link>
                            <Link href="#skills">
                                <Disclosure.Button className="navButton">Skills</Disclosure.Button>
                            </Link>
                            <Link href="#projects">
                                <Disclosure.Button className="navButton">Projects</Disclosure.Button>
                            </Link>
                            <Link href="#contact">
                                <Disclosure.Button className="navButton">Contact</Disclosure.Button>
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
                                className="iconA">
                                <SocialIcon
                                    url="https://linkedin.com/in/hollowaydaniel"
                                    fgColor="white"
                                    bgColor="transparent"
                                />
                            </motion.div>
                            <motion.div className="iconB"
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
                                    bgColor="transparent" />
                            </motion.div>
                            <motion.div className="iconB"
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
                                <a href="mailto:danielholloway.contact@gmail.com">
                                    <SocialIcon
                                        network="email"
                                        fgColor="white"
                                        bgColor="transparent"
                                    /></a>
                            </motion.div>
                        </div>
                    </Disclosure.Panel>
                </nav>
            </Disclosure>
        </div>
    )
}
