import React from "react";
import Title from "./title";
import Image from "next/Image";

export default function Education() {
    return <div className="wrapper">
        <Title text="Education"/>
        <div className="text-lg tracking-wide flex flex-col gap-4 hover:text-charlotteGreen duration-500">
            <a href="https://www.charlotte.edu/" target="_blank">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src="/img/uncclogo.png"
                            alt="UNCC Logo"
                            width={96}
                            height={50}
                            unoptimized
                        />
                        <div>
                            <h2 className="text-2xl">
                                University of North Carolina at Charlotte
                            </h2>
                            <h2>
                                Bachelor's of Science in Computer Engineering
                            </h2>
                        </div>
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 tabular-nums ">
                        2019 - 2023
                    </span>
                </div>
            </a>
        </div>
    </div>
}