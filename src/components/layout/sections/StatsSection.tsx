import React from "react";
import VerticalLine from "../../ui/VerticalLine";

export default function StatsSection() {
    return (
        <section className="flex flex-col xl:flex-row px-8 py-5 mb-10 gap-12 relative">

            <div className="flex-1 flex items-start">
                <p className="text-lg font-light leading-relaxed max-w-xl text-stone-200">
                    Titan helps you navigate equity decisions, liquidity events,
                    and career transitions - with a dedicated human advisor and
                    a modern platform.
                </p>
            </div>

            <div className="hidden xl:block absolute left-1/2 top-0 bottom-0">
                <VerticalLine />
            </div>

            <div className="flex-1 flex flex-wrap md:flex-nowrap gap-12 items-center justify-between">

                <div className="flex flex-col">
                    <p className="text-stone-400 text-sm font-medium mb-2">
                        Assets Under Management
                    </p>
                    <p className="text-4xl font-medium tracking-[10.8px]">
                        <span className="tracking-normal">$</span>1.1B
                    </p>
                </div>

                <div className="hidden md:block h-24">
                    <VerticalLine />
                </div>

                <div className="flex flex-col">
                    <p className="text-stone-400 text-sm font-medium mb-2">
                        All-in Advisory Fee
                    </p>
                    <p className="text-4xl font-medium tracking-[7.2px]">
                        0.4%
                    </p>
                </div>

                <div className="hidden md:block h-24">
                    <VerticalLine />
                </div>

                <div className="flex flex-col">
                    <p className="text-stone-400 text-sm font-medium mb-2">
                        Flat Fee
                    </p>
                    <p className="text-4xl font-medium">$0</p>
                </div>

            </div>

        </section>
    );
}