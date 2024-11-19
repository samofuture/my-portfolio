import React from 'react'
import Title from './title'

export interface skill {
    name: string;
    url: string;
}
const skills: skill[] = [
    {name: "Python", url: "https://github.com/samofuture/pytest-edu"},
    {name: "C/C++", url: "https://github.com/samofuture/XY-Petri-Scanner"},
    {name: "TypeScript", url: "https://github.com/samofuture/my-portfolio"},
    {name: "JavaScript", url: "https://github.com/samofuture/build-your-own-web-server"},
    {name: "React", url: "https://github.com/samofuture/my-portfolio"},
    {name: "Git", url: "https://github.com/samofuture"},
    {name: "Machine Learning", url: "https://github.com/samofuture/Intro-to-ML"},
    {name: "Swift", url: "/projects#Chore Manager App - WIP"},
    {name: "Node.js", url: "https://github.com/samofuture/build-your-own-web-server"},
    {name: "PyTest", url: "https://github.com/samofuture/pytest-edu"},
    {name: "Test Automation", url: "https://github.com/samofuture/pytest-edu"},
    {name: "Robotics", url: "https://github.com/samofuture/AI-For-Robotics"},
    {name: "OpenCV", url: "https://github.com/samofuture/Solar-Panel-Cleaning-Robot"},
    {name: "Linux", url: "/experience#Systems Test Engineering Intern"},
    {name: "3D Printing", url: "https://github.com/samofuture/XY-Petri-Scanner"},
    {name: "CNC", url: "/experience#Makerspace Technician"},
    {name: "Autodesk Inventor CAD", url: "https://github.com/samofuture/XY-Petri-Scanner"},
    {name: "SLAM Algorithms", url: "/experience#Undergraduate Research Assistant"}
]

export default function Skills() {
    return <div className="wrapper flex flex-row md:flex-col gap-5 max-w-full">
        <Title text="Skills"/>
        <div className="flex flex-wrap gap-4 max-w-full items-center">
            {skills.map((skill, index) => (
                <a
                    key={index}
                    href={skill.url}
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <button className="px-3 py-1 rounded-full transition-all duration-500 bg-gradient-to-tl to-#121212/100 via-blue-700/50 from-orange-700 bg-size-200 bg-pos-0 hover:bg-pos-100">
                        { skill.name }
                    </button>
                </a>
            ))}
        </div>
        
    </div>
}