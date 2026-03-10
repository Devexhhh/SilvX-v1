import React from "react";
import VerticalLine from "../../ui/VerticalLine";

export default function CTASection() {
    return (
        <div className="px-12 pb-24 pt-12">

            <section className="w-full rounded-[20px] border border-zinc-600 overflow-hidden flex flex-col md:flex-row relative">

                <div className="flex-1 p-16 md:p-24 space-y-16 flex flex-col justify-center">

                    <h2 className="text-4xl font-medium leading-tight">
                        Get tactical guidance from a
                        <br className="hidden lg:block" />
                        Titan advisor
                    </h2>

                    <button className="bg-linear-to-b from-white to-stone-300 text-black w-44 h-11 rounded-[35px] text-[12px] font-semibold cursor-pointer tracking-tighter outline-1 outline-neutral-500">
                        TALK TO AN ADVISOR →
                    </button>

                </div>

                <div className="hidden md:block absolute left-[60%] top-8 bottom-8">
                    <VerticalLine />
                </div>

                <div className="hidden md:block w-[40%] bg-zinc-800/30" />

            </section>

        </div>
    );
}