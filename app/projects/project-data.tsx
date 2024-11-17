export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Website Portfolio - WIP",
    year: 2024,
    description:
      "This website! Completed with React, Vercel, TypeScript, and Github.",
    url: "https://github.com/samofuture/my-portfolio",
  },
  {
    title: "Chore Manager App - WIP",
    year: 2024,
    description:
      "This iOS app helps families and roommates manage the chore load in their homes so the workload is distributed evenly. Features Google authentication and database management with FireBase. Built with Swift, Xcode, and Github.",
    url: "https://example.com/",
  },
  {
    title: "Build Your Own Web Server - WIP",
    year: 2024,
    description:
      "Building a web server from scratch using JavaScript to better understand Back-End Development",
    url: "https://github.com/samofuture/build-your-own-web-server",
  },
  {
    title: "Lottery Analysis with PyTest",
    year: 2024,
    description:
      "Analyzing different aspects of the lottery while using PyTest to learn more about testing automation",
    url: "https://github.com/samofuture/pytest-edu"
  },
  {
    title: "Solar Panel Cleaning Robot",
    year: 2023,
    description:
      "Led a team of multidisciplinary engineers working with EPRI to design, assemble, and troubleshoot a robot to clean industrial solar panel plants. Built with Raspberry Pi, Python, OpenCV.",
    url: "https://github.com/samofuture/Solar-Panel-Cleaning-Robot"
  },
  {
    title: "Petri Scanning Robot",
    year: 2022,
    description:
      "A CNC robot designed to move across a petri dish in a grid like fashion. Built with Arduino, Stepper Motors, Autodesk Inventor (CAD), and 3D Printers.",
    url: "https://github.com/samofuture/XY-Petri-Scanner"
  },
  {
    title: "Bluetooth Split Keyboard",
    year: 2022,
    description:
      "Designed and soldered a PCB to have a removable microcontroller for a bluetooth split keyboard. Built with EasyEDA and Github.",
    url: "https://github.com/samofuture/zmk-config"
  }
];
