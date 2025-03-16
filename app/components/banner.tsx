import React from "react";
import Image from "next/image";
import ProfileImg from "../../public/img/profileImg.jpg";
import { socialLinks } from "app/config";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Banner() {
    return <div className="wrapper flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-7">
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
            <div className="flex flex-col items-center md:items-start pb-5 md:pb-0">
                <h1 className="text-5xl font-bold">Sam Crane</h1>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 tracking-wide">
                    Software Engineer
                </h3>
                <p className="text-base tracking-wide text-center md:text-left">
                    Actively Seeking new Career Opportunities
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
            <a href="resumes/embedded/Samuel-Crane-Resume.pdf" download className="flex flex-row items-center group pb-2">
                <h2 className="pr-3 text-2xl group-hover:text-transparent bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text transition-all duration-500">Robotics and Embedded Resume</h2>
                <IoDocumentTextOutline className="text-4xl group-hover:text-blue-500 duration-500"/>
            </a>
            <a href="resumes/web-developer/Samuel-Crane-Resume.pdf" download className="flex flex-row items-center group">
                <h2 className="pr-3 text-2xl group-hover:text-transparent bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text transition-all duration-500">Web Developer Resume</h2>
                <IoDocumentTextOutline className="text-4xl group-hover:text-blue-500 duration-500"/>
            </a>
        </div>
    </div>;
}