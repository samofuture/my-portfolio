import React from "react";
import type { Metadata } from "next";
import { experiences } from "./experience-data";
import { IoDocumentTextOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Experiences",
  description: "My Experience",
};

const Months = new Map([
    [1, "Jan"],
    [2, "Feb"],
    [3, "Mar"],
    [4, "Apr"],
    [5, "May"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Aug"],
    [9, "Sep"],
    [10, "Oct"],
    [11, "Nov"],
    [12, "Dec"],
]);

export default function Experiences() {

    return (
        <section>
            <div className="w-full flex flex-row justify-between items-baseline">
                <span className="tracking-tight">
                    <h1 className="mb-8 text-4xl font-medium">Experiences</h1>
                </span>
                
                <span className="tabular-nums">
                    <a href="/Samuel-Crane-Resume.pdf" download className="flex flex-row ">
                        <h2 className="pr-4 text-4xl">Résumé</h2>
                        <IoDocumentTextOutline className="text-4xl"/>
                    </a>
                </span>
            </div>
            
            <div className="space-y-6">
                {experiences.map((job, index) => (
                <a
                    key={index}
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group hover:opacity-80 transition-opacity duration-200"
                >
                    <div className="flex flex-col">
                        <div className="w-full flex justify-between items-baseline text-2xl">
                            <span className="text-black dark:text-white font-medium tracking-tight ">
                                {job.company}: {job.title}
                            </span>
                            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                                {Months.get(job.monthStart)} {job.yearStart} - {Months.get(job.monthEnd)} {job.yearEnd}
                            </span>
                        </div>
                        <div className="max-w-[766px] prose prose-neutral dark:prose-invert pt-3">
                            <ul>
                                {job.description.map((desc, descIndex) => (
                                    <li key={descIndex}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </section>
    );
}
