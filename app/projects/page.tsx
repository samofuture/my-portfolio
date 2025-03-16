import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-medium tracking-tight border-b-[1px] border-b-slate-600 pt-5 pb-8">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="wrapper pb-8 pt-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
              id={project.title}
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline text-2xl">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums ">
                    {project.year}
                  </span>
                </div>
                <p className="max-w-[90%] prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
              </div>
            </a>
            <div className="flex flex-wrap gap-4 max-w-full items-center pt-3">
                {project.skills.map((skill, skillIndex) => (
                    <button key={skillIndex} className="px-3 py-1 rounded-full transition-all duration-500 bg-gradient-to-tl to-#121212/100 via-blue-700/50 from-orange-700 bg-size-200 bg-pos-0 hover:bg-pos-100">
                        { skill }
                    </button>
                ))}
                
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
