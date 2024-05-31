import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className="w-full h-screen bg-[#F1F1F1] pt-2">
            <div className="textstructure mt-44 px-20">
                {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
                    return <div className="masker ">
                        <div className="w-fit flex items-end">
                            {index ===1 && ( <div className="w-[9vw] mr-[1vw] h-[6vw] bg-red-500 ml-4 "></div>
                            )}
                            <h1 className="uppercase text-[8vw] leading-[6.8vw] tracking-tighter font-bold font-sans">{item}</h1>

                        </div>
                    </div>
                })}

            </div>
            <div className="border-t-[1px] border-black mt-28 flex justify-between items-center py-5 px-20" >
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className="text-md font-light tracking-tight leading-none">{item}</p>)}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[2px] border-black  text-md uppercase rounded-full">start the project</div>
                    <div className="w-10 h-10 rounded-full border-[1px] border-black flex items-center justify-center">
                        <span className="rotate-[45deg]"><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;