import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import ReactPlayer from "react-player"
import { isAbsolute, relative } from 'path';

type Props = {}

const Hero = (props: Props) => {
    const videoID = "https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?muted=true&loop=true&autoplay=true&controls=false"
    return (
        <div className="">
            <div className="overlay"></div>
            <div id="stream">
                <Stream
                    src={videoID}
                    className="aspect-video"
                    autoplay
                    loop
                />
            </div>
            <div className="content">
                <header className="grid justify-items-center">
                    <span className="flex">
                        <h1 className="font-Comfortaa pb-4 lg:pb-6 lg:text-5xl text-3xl pt-1 text-zinc-300">Hello, I'm</h1>
                        <h1 className="font-Dancing text-zinc-300 lg:pl-4 lg:text-5xl text-3xl pl-2">Daniel Holloway</h1>
                    </span>
                    <h2 className="font-Comfortaa lg:pt-6 text-zinc-300 lg:text-2xl">Full-Stack Developer and Designer</h2>
                </header>
            </div>
        </div>
    )
}

export default Hero