import React from 'react';

// --- Decorative Line Components ---
// These ensure the lines never touch the edges or intersect.
// The mx-6 and my-6 create the "disconnected" gaps.
const HorizontalLine = () => (
    <div className="h-[0.2px] w-full px-6 py-0">
        <div className="h-full w-full bg-zinc-500/50" />
    </div>
);

const SplitHorizontalLine = () => (
    <div className="flex items-center gap-8 px-6 w-full h-[0.2px]">
        <div className="h-full flex-1 bg-zinc-500/50" />
        <div className="h-full flex-1 bg-zinc-500/50" />
    </div>
);

const VerticalLine = () => (
    <div className="w-[0.2px] h-full py-6">
        <div className="w-full h-full bg-zinc-500/50" />
    </div>
);

export default function Hero() {
    return (
        <div className="min-h-screen w-full bg-zinc-900 text-white overflow-hidden py-8">
            {/* Main Wrapper Container */}
            <div className="relative max-w-6xl mx-auto min-h-screen flex flex-col">

                {/* The Outer Disconnected Vertical Lines */}
                {/* top-8 and bottom-8 ensure they don't touch the top/bottom of the screen */}
                <div className="absolute left-0 top-0 bottom-0 w-[0.2px] bg-zinc-500/50" aria-hidden="true" />
                <div className="absolute right-0 top-0 bottom-0 w-[0.2px] bg-zinc-500/50" aria-hidden="true" />

                {/* --- NAVBAR --- */}
                <header className="flex items-center justify-between px-12 py-6 h-15">
                    <nav className="hidden md:flex items-center justify-center gap-15 bg-neutral-500 rounded-[30px] px-10 py-2 mb-6">
                        <a href="#offerings" className="text-sm font-medium hover:text-stone-300">Offerings</a>
                        <a href="#about" className="text-sm font-medium hover:text-stone-300">About</a>
                        <a href="#blog" className="text-sm font-medium hover:text-stone-300">Blog</a>
                    </nav>
                    <div className="flex items-center gap-8 ml-auto mb-6">
                        <button className="text-sm font-medium hover:text-stone-300">Log In</button>
                        <button className="bg-neutral-500 rounded-[30px] px-10 py-2 text-sm font-medium hover:bg-neutral-400 cursor-pointer">
                            Join Titan
                        </button>
                    </div>
                </header>

                {/* Recreating the specific split horizontal line from your Figma design */}
                <SplitHorizontalLine />

                {/* --- HERO SECTION --- */}
                <section className="flex flex-col xl:flex-row relative px-12 py-24 gap-12">
                    <div className="flex-1 flex flex-col justify-center space-y-12">
                        <h1 className="text-5xl md:text-[50px] font-normal leading-tight">
                            The Wealth Advisor for <br className="hidden md:block" />
                            high-stakes financial <br className="hidden md:block" />
                            decisions
                        </h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-linear-to-b from-white to-stone-300 text-black w-44 h-11 rounded-[35px] text-[10px] font-medium tracking-wider outline outline-neutral-500 hover:opacity-90 transition-opacity">
                                GET STARTED &rarr;
                            </button>
                            <button className="outline-[0.5px] outline-neutral-500 text-white w-44 h-11 rounded-[35px] text-[10px] font-medium tracking-wider hover:bg-white/5 transition-colors">
                                SEE WHY &rarr;
                            </button>
                        </div>
                    </div>
                    <div className="hidden xl:block absolute left-1/2 top-0 bottom-0">
                        <VerticalLine />
                    </div>
                    <div className="w-full mr-10 xl:w-96 h-96 bg-neutral-800/50 rounded-lg" />
                </section>

                <HorizontalLine />

                {/* --- STATS SECTION --- */}
                <section className="flex flex-col xl:flex-row px-12 py-24 gap-12 relative">
                    <div className="flex-1 flex items-center">
                        <p className="text-lg font-medium leading-relaxed max-w-xl text-stone-200">
                            Titan helps you navigate equity decisions, liquidity events, and career
                            transitions - with a dedicated human advisor and a modern platform.
                        </p>
                    </div>

                    {/* Inner disconnected vertical line for larger screens */}
                    <div className="hidden xl:block absolute left-1/2 top-0 bottom-0">
                        <VerticalLine />
                    </div>

                    <div className="flex-1 flex flex-wrap md:flex-nowrap gap-12 items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-stone-400 text-lg font-medium mb-2">Assets Under Management</p>
                            <p className="text-4xl font-medium tracking-[10.8px]"><span className="tracking-normal">$</span>1.1B</p>
                        </div>

                        <div className="hidden md:block h-24"><VerticalLine /></div>

                        <div className="flex flex-col">
                            <p className="text-stone-400 text-lg font-medium mb-2">All-in Advisory Fee</p>
                            <p className="text-4xl font-medium tracking-[7.2px]">0.4%</p>
                        </div>

                        <div className="hidden md:block h-24"><VerticalLine /></div>

                        <div className="flex flex-col">
                            <p className="text-stone-400 text-lg font-medium mb-2">Flat Fee</p>
                            <p className="text-4xl font-medium">$0</p>
                        </div>
                    </div>
                </section>

                <HorizontalLine />

                {/* --- CARDS SECTION --- */}
                <section className="px-12 py-24 space-y-12 relative">
                    <h2 className="text-4xl font-medium">Titan matters most for high-stakes decisions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/30 rounded-[30px] h-48 p-8 flex flex-col justify-start hover:bg-white/40 transition-colors cursor-pointer">
                                <h3 className="text-xl font-medium leading-snug">
                                    Equity compensation <br /> becomes real money &rarr;
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                <HorizontalLine />

                {/* --- VALUE ADD SECTION --- */}
                <section className="px-12 py-24 space-y-16">
                    <h2 className="text-4xl font-medium">How we add value</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-24 h-9 flex items-center justify-center rounded-[10px] outline outline-[0.2px] outline-stone-300">
                            <span className="text-xl font-medium">1</span>
                        </div>
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-medium mt-1">See what’s at stake</h3>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-base font-medium leading-relaxed text-stone-200">
                                We haven’t come prepared. Before any decision is made, we build a
                                complete view of your financial picture - equity exposure,
                                taxes, liquidity, and upcoming deadlines - so critical items
                                aren’t missed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- CTA SECTION --- */}
                <div className="px-12 pb-24 pt-12">
                    <section className="w-full rounded-[20px] outline outline-[0.2px] outline-stone-300 overflow-hidden flex flex-col md:flex-row relative">
                        <div className="flex-1 p-16 md:p-24 space-y-16 flex flex-col justify-center">
                            <h2 className="text-4xl font-medium leading-tight">
                                Get tactical guidance from a <br className="hidden lg:block" /> Titan advisor
                            </h2>
                            <button className="bg-gradient-to-b from-white to-stone-300 text-black w-44 h-11 rounded-[35px] text-[10px] font-medium tracking-wider outline outline-1 outline-neutral-500 hover:opacity-90 transition-opacity">
                                TALK TO AN ADVISOR &rarr;
                            </button>
                        </div>

                        {/* Inner Disconnected Line for CTA */}
                        <div className="hidden md:block absolute left-[60%] top-8 bottom-8">
                            <VerticalLine />
                        </div>

                        <div className="hidden md:block w-[40%] bg-zinc-800/30"></div>
                    </section>
                </div>

            </div>
        </div>
    );
}