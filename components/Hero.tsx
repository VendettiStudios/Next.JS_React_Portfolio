import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import ReactPlayer from "react-player"
import { isAbsolute, relative } from 'path';

type Props = {}

const Hero = (props: Props) => {
    const videoID = "https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?muted=true&loop=true&autoplay=true&controls=false"
    return (
        <div className="z-10">
            <div className="overlay absolute h-screen opacity-20 bg-black z-20"></div>

            {/* <video id="videoBG" className="" autoPlay loop >
                <source src="Water.mp4" type="video/mp4" />
            </video> */}
            {/* <video
                autoPlay
                muted
                loop
                style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                src ="https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?"
                >
            <source src="https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?" type="video/mp4" />
                </video> */}

            {/* <iframe src='c'
id="iframe"
style={{
    border: 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
    }}
        allow='autoplay; encrypted-media loop'
        allowFullScreen
        title='video'
/> */}

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
                        <h1 className="pb-4 lg:pb-6 font-Comfortaa text-3xl lg:text-5xl pt-1">Hello, I'm</h1>
                        <h1 className="font-Dancing lg:pl-4 pl-2 font-black text-3xl lg:text-5xl">Daniel Holloway</h1>
                    </span>
                    <h2 className="lg:pt-6 font-Comfortaa">Full-Stack Developer and Designer</h2>
                </header>
            </div>
        </div>
    )
}

export default Hero