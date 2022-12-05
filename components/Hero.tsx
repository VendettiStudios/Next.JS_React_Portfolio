import React from 'react'
import { Stream } from "@cloudflare/stream-react";


type Props = {}

const Hero = (props: Props) => {
    const videoID = "https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?muted=true&loop=true&autoplay=true&controls=false"
    return (
        <div className="heroSection h-screen overflow-hidden">
            <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div className="overlay fixed"></div>
                {/* <div id="stream">
                    <Stream
                        src={videoID}
                        className="aspect-video"
                        autoplay
                        loop
                    />
                </div> */}
                <div className="backgroundVideo">
                <iframe src="https://player.vimeo.com/video/777748066?background=1&loop=1" width="2800" height="1575"></iframe>
                </div>
                <div className="content">
                    <h1 className="font-Comfortaa lg:text-5xl text-3xl text-zinc-300">Hello,</h1>

                    <span className="flex lg:pb-2 lg:text-5xl text-3xl text-zinc-300">
                        <h1 className="font-Comfortaa text-zinc-300">I'm</h1>
                        <h1 className="font-Dancing text-zinc-300 pl-2 lg:pl-3 lg:text-5xl text-3xl">Daniel Holloway</h1>
                    </span>

                    <h2 className="font-Comfortaa text-zinc-300 lg:text-2xl pt-2 font-bold">Full-Stack Developer and Designer</h2>
                </div>
            </header>
        </div>
    )
}
export default Hero