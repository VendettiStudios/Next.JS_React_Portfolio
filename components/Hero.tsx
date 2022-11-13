import React from 'react'
import { Stream } from "@cloudflare/stream-react";

type Props = {}

const Hero = (props: Props) => {
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
                src="https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-y9cdb7xgb9ciakj4.cloudflarestream.com%2F7102b82195e7169ae2da16b6023be17f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
> */}
                {/* <source src= type="video/mp4" /> */}
                <Stream controls src={"https://customer-y9cdb7xgb9ciakj4.cloudflarestream.com/7102b82195e7169ae2da16b6023be17f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-y9cdb7xgb9ciakj4.cloudflarestream.com%2F7102b82195e7169ae2da16b6023be17f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"}/>
            {/* </video> */}
            <div className="content">
                <header className="fixed z-20 grid row-auto justify-items-center text-white text-xl lg:text-5xl">
                    <h1 className="pb-4 lg:pb-6">Hello, I'm Daniel Holloway</h1>
                    <p className="lg:pt-6">Full-Stack Developer and Designer</p>
                </header>
            </div>
        </div>
    )
}

export default Hero