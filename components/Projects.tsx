import React from 'react'
import Image from "next/image";
import { SocialIcon } from "react-social-icons"

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className="projectSection">
            <h1 className="head">Projects</h1>
            <div className="pb-6">
                <div className="projectGrid text-white">
                    <div className="imageContainer1">
                        <Image className="projectImage" src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/4fdeb254-43f5-41a6-14fa-9b2c4e2e7500/public" alt=""
                            height="400"
                            width="400">
                        </Image>
                        <h1 className="flex justify-center pt-2">Let's Frickin Game</h1>
                        <SocialIcon
                            url="https://github.com/jmonty94/lets-fricking-game"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://lets-frickin-game.herokuapp.com/" label="lets-frickin-game"
                            fgColor="#87F3B2"
                            bgColor="transparent" />
                    </div>
                    <div className="imageContainer2">
                        <Image className="projectImage" src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/70b92a1e-aa25-47da-5cec-fe8812058a00/public" alt=""
                            height="400"
                            width="400">

                        </Image>
                        <h1 className="flex justify-center pt-2">Offload</h1>
                        <SocialIcon
                            url="https://github.com/ayeh6/Offload"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://yeh-offload.herokuapp.com/signin" label="Offload"
                            fgColor="#87F3B2"
                            bgColor="transparent" />
                    </div>
                    <div className="imageContainer3">
                        <Image className="projectImage" src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/22bdefb2-d695-475c-d82b-07016343cb00/public" alt=""
                            height="400"
                            width="400">
                        </Image>
                        <h1 className="flex justify-center pt-2">Pokemon War</h1>
                       <span className="inline-flex"> <SocialIcon
                            url="https://github.com/dnsnguy08/Pokemon-Battle/"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://dnsnguy08.github.io/Pokemon-Battle/" label="Pokemon-Battle-App"
                            fgColor="#87F3B2"
                            bgColor="transparent"
                        /><h1 className="pt-4">Live Link</h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects