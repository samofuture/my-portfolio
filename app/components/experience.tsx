import React from "react";
import Title from "./title"
export default function Experience() {
    return <div className="wrapper">
        <Title text="Experience"/>
        <div className="text-lg tracking-wide flex flex-col gap-4">
            <p>
                While I pursued my undergraduate degree, I had the privilege of serving as Vice President of our university's IEEE RAS chapter. This experience not only deepened my understanding of embedded systems and robotics, but also provided me with invaluable leadership skills. One highlight from this period was leading our team to a 1st place win at the SoutheastCon Hardware Competition in 2022! The time I spent as part of IEEE RAS remains one of my most cherished memories.
            </p>
            <p>
                As an Undergraduate Researcher, I spearheaded the development of a robot's implementation in ROS (C++) with Ubuntu Linux, recorded and presented data using real-time SLAM algorithms, and evaluated the performance of the robot and algorithm in an office environment.
            </p>
            <p>
                My experience as a Senior Capstone Project team lead on the Solar Panel Cleaning Robot has given me expertise in integrating OpenCV for autonomous cleaning routines. I've also developed 1,500+ lines of Python code to automatically evaluate robot performance across multiple tests using data from a Ground Truth System (GTS).
            </p>
        </div>
    </div>
}