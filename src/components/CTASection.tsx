export default function CTASection() {
    return (
        <div className="w-full rounded-[20px] outline outline-[0.2px] outline-stone-300 overflow-hidden flex flex-col md:flex-row bg-zinc-900">
            <div className="flex-1 p-16 md:p-24 space-y-12 flex flex-col justify-center">
                <h2 className="text-4xl font-medium leading-tight">
                    Get tactical guidance from a <br /> Titan advisor
                </h2>
                <button className="bg-gradient-to-b from-white to-stone-300 w-fit text-black px-6 py-3 rounded-[35px] text-[10px] font-medium tracking-wider outline outline-1 outline-neutral-500 hover:opacity-90 transition-opacity">
                    TALK TO AN ADVISOR &rarr;
                </button>
            </div>

            {/* Inner vertical line mirroring Figma's structure */}
            <div className="hidden md:block w-72 lg:w-96 border-l border-neutral-500 bg-zinc-800/20 min-h-[400px]"></div>
        </div>
    );
}