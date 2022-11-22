import React from 'react'
import { SocialIcon } from "react-social-icons"

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className="contactSection">
            <div className="head">Contact</div>
            <div><h2 className="letsTalk">Lets Talk</h2></div>
            <p className="flex justify-center text-white">1+(858) 333-6554</p>
            <span className="flex justify-center"><SocialIcon
                                network="email"
                                fgColor="white"
                                bgColor="transparent"
                            /><p className="pt-3 pb-6 mb-6 text-white">danielholloway.contact@gmail.com</p></span>
        </div>
    )
}

export default Contact