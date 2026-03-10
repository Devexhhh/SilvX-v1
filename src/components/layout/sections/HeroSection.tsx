import React from "react";
import VerticalLine from "../../ui/VerticalLine";

export default function HeroSection() {
    return (
        <section className="flex flex-col xl:flex-row relative px-12 py-24 gap-12">
            <div className="flex-1 flex flex-col justify-center space-y-12">
                <h1 className="text-5xl md:text-[50px] font-normal leading-tight">
                    The Wealth Advisor for <br className="hidden md:block" />
                    high-stakes financial <br className="hidden md:block" />
                    decisions
                </h1>

                <div className="flex flex-wrap items-center gap-6">
                    <button className="bg-linear-to-b from-white to-stone-300 text-black w-44 h-11 rounded-[35px] text-[10px] font-medium tracking-wider outline outline-neutral-500">
                        GET STARTED →
                    </button>

                    <button className="outline-[0.5px] outline-neutral-500 text-white w-44 h-11 rounded-[35px] text-[10px] font-medium tracking-wider">
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