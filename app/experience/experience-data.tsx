export interface Experience {
    company: string;
    title: string;
    yearStart: number;
    yearEnd: number;
    monthStart: number;
    monthEnd: number;
    description: string[];
    url: string;
}  

export const experiences: Experience[] = [
{
    company: "Butlr",
    title: "Systems Test Engineering Contractor",
    yearStart: 2024,
    yearEnd: 2024,
    monthStart: 1,
    monthEnd: 6,
    description:
    ["Spearheaded the design, review, and execution of over 10 comprehensive test plans",
        "Generated dashboard visualizations of sensor data retrieved via the MQTT protocol (Python)",
        "Analyzed sensor data with statistics to correct sensor errors and variance by >250%",
        "Collaborated with 2 other teams to determine objectives and testing requirements"],
    url: "https://butlr.com/",
},
{
    company: "iRobot",
    title: "Systems Test Engineering Intern",
    yearStart: 2022,
    yearEnd: 2023,
    monthStart: 7,
    monthEnd: 12,
    description:
    ["Developed 1,500+ lines of Python code to automatically evaluate robot performance across 5 tests using 6DOF data from a Ground Truth System (GTS)", 
        "Optimized the existing evaluators speed by 26x while improving its accuracy (Python)", 
        "Integrated a GTS software into a PyTest based automated robot testing software to automate 5 tests", 
        "Evaluated the output of an RTK GTS to be within 2 cm of its reported position", "Triggered a GTS to start and stop capturing within 20 ms using logging firmware (C)", "Designed and troubleshooted software for robots in design challenges with 10 interns"],
    url: "https://irobot.com/",
},
{
    company: "UNCC",
    title: "Undergraduate Research Asssistant",
    yearStart: 2021,
    yearEnd: 2021,
    monthStart: 6,
    monthEnd: 8,
    description:
    ["Documented code and its implementation in ROS (C++) with Ubuntu Linux",
        "Recorded and presented data using real time SLAM algorithms and SSH remote connections",
        "Evaluated the performance of the robot and algorithm in an office environment"],
    url: "https://cci.charlotte.edu/departments/department-of-computer-science/",
},
];