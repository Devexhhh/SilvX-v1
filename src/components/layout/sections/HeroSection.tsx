import React from "react";
import VerticalLine from "../../ui/VerticalLine";

export default function HeroSection() {
    return (
        <section className="flex flex-col xl:flex-row relative px-8 py-10 mb-10 gap-12">
            <div className="flex-1 flex flex-col justify-center space-y-8">
                <h1 className="text-5xl md:text-[52px] font-normal leading-tight">
                    The wealth advisor for <br className="hidden md:block" />
                    high-stakes financial <br className="hidden md:block" />
                    decisions
                </h1>

                <div className="flex flex-wrap items-center gap-10">
                    <button className="bg-linear-to-b from-white to-stone-300 text-black w-44 h-11 rounded-[35px] text-[12px] font-semibold tracking-tighter outline cursor-pointer outline-neutral-500">
                        GET STARTED →
                    </button>

                    <button className=" outline-neutral-500 text-white h-11 rounded-[35px] text-[12px] font-semibold tracking-tight cursor-pointer">
                        SEE WHY →
                    </button>
                </div>
            </div>

            <div className="hidden xl:block absolute left-1/2 top-0 bottom-0">
                <VerticalLine />
            </div>

            <div className="w-full mr-10 xl:w-96 h-96 bg-neutral-800/50 rounded-lg" />
        </section>
    );
}