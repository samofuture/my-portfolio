import {v4 as uuid} from 'uuid';

export interface Experience {
    id: string;
    company: string;
    title: string;
    monthStart: number;
    yearStart: number;
    monthEnd: number;
    yearEnd: number;
    description: string[];
    url: string;
    skills: string[];
}  

export const experiences: Experience[] = [
{
    id: uuid(),
    company: "Butlr",
    title: "Systems Test Engineering Contractor",
    monthStart: 1,
    yearStart: 2024,
    monthEnd: 6,
    yearEnd: 2024,
    description: [
        "Spearheaded the design, review, and execution of over 10 comprehensive test plans",
        "Generated dashboard visualizations of sensor data retrieved via the MQTT protocol (Python)",
        "Analyzed sensor data with statistics to correct sensor errors and variance by >250%",
        "Collaborated with 2 other teams to determine objectives and testing requirements"
    ],
    url: "https://butlr.com/",
    skills: [
        "Python",
        "Data Science",
        "Test Automation",
        "Git",
        "Linux"
    ]
},
{
    id: uuid(),
    company: "iRobot",
    title: "Systems Test Engineering Intern",
    monthStart: 5,
    yearStart: 2023,
    monthEnd: 12,
    yearEnd: 2023,
    description: [
        "Optimized the existing evaluators speed by 26x while improving its accuracy (Python)",
        "Integrated a GTS software into a PyTest based robot testing software to fully automate 5 tests", 
        "Triggered a GTS to start and stop capturing within 20 ms using logging firmware (C)",
    ],
    url: "https://irobot.com/",
    skills: [
        "Python",
        "C/C++",
        "Data Science",
        "Git",
        "PyTest",
        "Test Automation",
        "Robotics",
        "Linux"
    ]
},
{
    id: uuid(),
    company: "UNCC",
    title: "Makerspace Lab Coordinator",
    monthStart: 1,
    yearStart: 2021,
    monthEnd: 5,
    yearEnd: 2023,
    description: [
        "Maintained and operated 3D printing and CNC laser technology",
        "Assisted students with introductory courses in Arduino and Autodesk Inventor"
    ],
    url: "https://osds.charlotte.edu/freshman-learning-community/overview/",
    skills: [
        "Git",
        "3D Printing",
        "CNC",
        "Autodesk Inventor CAD"
    ]
},
{
    id: uuid(),
    company: "iRobot",
    title: "Systems Test Engineering Intern",
    monthStart: 7,
    yearStart: 2022,
    monthEnd: 12,
    yearEnd: 2022,
    description: [
        "Developed 1,500+ lines of Python code with object-oriented programming (OOP) to automatically evaluate robot performance across 5 tests using 6DOF data from a Ground Truth System (GTS) while providing modularity, maintainability, and readability",  
        "Evaluated the output of an RTK GTS to be within 2 cm of its reported position",
        "Designed and troubleshooted software for robots in design challenges with 10 interns"
    ],
    url: "https://irobot.com/",
    skills: [
        "Python",
        "Data Science",
        "Git",
        "Robotics",
        "Linux"
    ]
},
{
    id: uuid(),
    company: "UNCC",
    title: "Undergraduate Research Assistant",
    monthStart: 6,
    yearStart: 2021,
    monthEnd: 8,
    yearEnd: 2021,
    description: [
        "Implemented and documented a dual camera SLAM algorithm in ROS C++ with Ubuntu Linux ",
        "Recorded and presented data using real time SLAM algorithms and SSH remote connections",
        "Simulated environments using Gazebo to evaluate SLAM-based navigation algorithms"
    ],
    url: "https://cci.charlotte.edu/departments/department-of-computer-science/",
    skills: [
        "Python",
        "Git",
        "Robotics",
        "SLAM Algorithms",
        "Linux"
    ]
},
];