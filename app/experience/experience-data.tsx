export interface Experience {
    company: string;
    title: string;
    monthStart: number;
    yearStart: number;
    monthEnd: number;
    yearEnd: number;
    description: string[];
    url: string;
}  

export const experiences: Experience[] = [
{
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
},
{
    company: "iRobot",
    title: "Systems Test Engineering Intern",
    monthStart: 5,
    yearStart: 2023,
    monthEnd: 12,
    yearEnd: 2023,
    description: [
        "Optimized the existing evaluators speed by 26x while improving its accuracy (Python)",
        "Integrated a GTS software into a PyTest based automated robot testing software to automate 5 tests", 
        "Triggered a GTS to start and stop capturing within 20 ms using logging firmware (C)",
    ],
    url: "https://irobot.com/",
},
{
    company: "UNCC",
    title: "Makerspace Technician",
    monthStart: 1,
    yearStart: 2021,
    monthEnd: 5,
    yearEnd: 2023,
    description: [
        "Maintained and operated 3D printing and CNC laser technology",
        "Assisted students with introductory courses in Arduino and Autodesk Inventor"
    ],
    url: "https://osds.charlotte.edu/freshman-learning-community/overview/"
},
{
    company: "iRobot",
    title: "Systems Test Engineering Intern",
    monthStart: 7,
    yearStart: 2022,
    monthEnd: 12,
    yearEnd: 2022,
    description: [
        "Developed 1,500+ lines of Python code to automatically evaluate robot performance across 5 tests using 6DOF data from a Ground Truth System (GTS)",  
        "Evaluated the output of an RTK GTS to be within 2 cm of its reported position",
        "Designed and troubleshooted software for robots in design challenges with 10 interns"
    ],
    url: "https://irobot.com/",
},
{
    company: "UNCC",
    title: "Undergraduate Research Asssistant",
    monthStart: 6,
    yearStart: 2021,
    monthEnd: 8,
    yearEnd: 2021,
    description: [
        "Documented code and its implementation in ROS (C++) with Ubuntu Linux",
        "Recorded and presented data using real time SLAM algorithms and SSH remote connections",
        "Evaluated the performance of the robot and algorithm in an office environment"
    ],
    url: "https://cci.charlotte.edu/departments/department-of-computer-science/",
},
];