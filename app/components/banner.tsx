import React from "react";
import Image from "next/image";
import ProfileImg from "../../public/img/profileImg.jpg";
import { socialLinks } from "app/config";

export default function Banner() {
    return <div className="wrapper flex flex-col md:flex-row items-center gap-10">
        <div className="w-44 h-64 rounded-full">
            <a href={socialLinks.linkedin} target="_blank">
                <Image 
                    className="w-full h-full rounded-full object-cover" 
                    src={ProfileImg} 
                    alt="Profile Photo"
                    priority
                />
            </a>
            
        </div>
        <div className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl font-bold text-white">Sam Crane</h1>
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 tracking-wide">
                Software Engineer
            </h3>
            <p className="text-base tracking-wide text-center md:text-left">
                Actively Seeking new Career Opportunities
            </p>
        </div>
    </div>;
}