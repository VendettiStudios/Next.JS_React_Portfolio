import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
     <div className="z-10">
            <div className="overlay"></div>
            <video id="videoBG" className="" autoPlay loop >
            <source src="Water.mp4" type="video/mp4"/>
            </video>
        </div>
  )
}

export default Hero