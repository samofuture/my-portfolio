import React from "react";

export default function Title({text}) {
    return <div className="flex pb-8 group">
        <h3 className="text-2xl font-semibold relative overflow-hidden">
            {text}
            <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </h3>
    </div>
}