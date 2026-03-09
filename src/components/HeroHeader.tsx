export default function HeroHeader() {
    return (
        <section className="flex flex-col xl:flex-row relative">
            <div className="flex-1 p-12 md:p-24 flex flex-col justify-center space-y-12">
                <h1 className="text-5xl md:text-6xl font-normal leading-tight">
                    The Wealth Advisor for <br className="hidden md:block" />
                    high-stakes financial <br className="hidden md:block" />
                    decisions
                </h1>
                <div className="flex flex-wrap items-center gap-6">
                    <button className="bg-gradient-to-b from-white to-stone-300 text-black px-8 py-4 rounded-[35px] text-[10px] font-medium tracking-wider outline outline-1 outline-neutral-500 hover:opacity-90">
                        GET STARTED &rarr;
                    </button>
                    <button className="outline outline-[0.5px] outline-neutral-500 text-white px-8 py-4 rounded-[35px] text-[10px] font-medium tracking-wider hover:bg-white/5">
                        SEE WHY &rarr;
                    </button>
                </div>
            </div>
            {/* Vertical divider line for the graphic */}
            <div className="hidden xl:block w-96 border-l border-neutral-500/50 min-h-[400px]"></div>
        </section>
    );
}