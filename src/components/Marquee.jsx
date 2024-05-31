import React from "react";

function Marquee(){
    return (
        <div className="w-full py-10 bg-[#004D43]">
            <div className="text border-t-2  whitespace-nowrap border-b-2 flex  text-[#F1F1F1] border-zinc-300 ">
                <h1 className="text-[10vw] leading-none font-sans uppercase  font-bold">we are ochi</h1>
                <h1 className="text-[10vw] leading-none font-sans uppercase font-bold">we are ochi</h1>
            </div>
        </div>
    )
}

export default Marquee;