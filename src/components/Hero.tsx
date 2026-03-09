import React from 'react';

export default function Hero() {
    return (
        // Replaced fixed 1920x2013 dimensions with full width and responsive minimum height
        <div className="min-h-screen w-full bg-zinc-900 text-white selection:bg-neutral-700">

            {/* Navigation Layer */}
            <header className="flex items-center justify-between px-6 py-6 max-w-[1400px] mx-auto border-b border-neutral-600/40">
                <nav className="hidden md:flex items-center gap-15 bg-zinc-100/30 px-20 py-3 rounded-full">
                    <a href="#offerings" className="text-base font-medium hover:text-stone-300 transition-colors">Offerings</a>
                    <a href="#about" className="text-base font-medium hover:text-stone-300 transition-colors">About</a>
                    <a href="#blog" className="text-base font-medium hover:text-stone-300 transition-colors px-5">Blog</a>
                </nav>

                <div className="flex items-center gap-6 ml-auto">
                    <button className="text-base font-medium hover:text-stone-300 transition-colors">Log In</button>
                    <button className="bg-zinc-100/30 px-6 py-3 rounded-full text-base font-medium">
                        Join Titan
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-[1400px] mx-auto px-6 pt-24 pb-32 space-y-32">

                {/* 1. Hero Section */}
                <section className="flex flex-col xl:flex-row justify-between items-start gap-16 relative">
                    <div className="max-w-3xl space-y-12">
                        <h1 className="text-5xl md:text-7xl font-normal leading-tight">
                            The Wealth Advisor for <br className="hidden md:block" />
                            high-stakes financial <br className="hidden md:block" />
                            decisions
                        </h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-gradient-to-b from-white to-stone-300 text-black px-8 py-4 rounded-full text-xs font-bold tracking-wider hover:opacity-90 transition-opacity">
                                GET STARTED &rarr;
                            </button>
                            <button className="border border-neutral-500 text-white px-8 py-4 rounded-full text-xs font-bold tracking-wider hover:bg-white/10 transition-colors">
                                SEE WHY &rarr;
                            </button>
                        </div>
                    </div>
                    {/* Placeholder for the empty absolute div from Figma */}
                    <div className="w-full xl:w-96 h-96 bg-neutral-800 rounded-[30px]" aria-label="Hero graphic placeholder" />
                </section>

                {/* 2. Sub-Hero & Stats */}
                <section className="border-t border-neutral-600/40 pt-16">
                    <div className="flex flex-col xl:flex-row justify-between gap-16">
                        <p className="text-lg md:text-xl font-medium text-stone-200 max-w-2xl leading-relaxed">
                            Titan helps you navigate equity decisions, liquidity events, and career transitions - with a dedicated human advisor and a modern platform.
                        </p>
                        <div className="flex flex-wrap gap-12 xl:gap-24">
                            <div>
                                <p className="text-stone-300 text-lg font-medium mb-3">Assets Under Management</p>
                                <p className="text-4xl font-medium tracking-widest">$1.1B</p>
                            </div>
                            <div>
                                <p className="text-stone-300 text-lg font-medium mb-3">All-in Advisory Fee</p>
                                <p className="text-4xl font-medium tracking-widest">0.4%</p>
                            </div>
                            <div>
                                <p className="text-stone-300 text-lg font-medium mb-3">Flat Fee</p>
                                <p className="text-4xl font-medium">$0</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Cards Section */}
                <section className="space-y-12 border-t border-neutral-600/40 pt-16">
                    <h2 className="text-4xl font-medium">Titan matters most for high-stakes decisions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/10 hover:bg-white/15 transition-colors h-48 rounded-[30px] p-8 flex items-start cursor-pointer">
                                <h3 className="text-xl font-medium leading-snug">
                                    Equity compensation <br /> becomes real money &rarr;
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Value Add Section */}
                <section className="space-y-16 border-t border-neutral-600/40 pt-16">
                    <h2 className="text-4xl font-medium">How we add value</h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-neutral-600/40 pb-16">
                        <div className="md:col-span-1">
                            <span className="flex items-center justify-center w-12 h-10 border border-stone-300 rounded-[10px] text-xl font-medium">
                                1
                            </span>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="text-2xl font-medium mt-1">See what’s at stake</h3>
                        </div>
                        <div className="md:col-span-7">
                            <p className="text-base text-stone-200 leading-relaxed font-medium">
                                We haven’t come prepared. Before any decision is made, we build a
                                complete view of your financial picture - equity exposure, taxes,
                                liquidity, and upcoming deadlines - so critical items aren’t missed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Bottom CTA Section */}
                <section className="border border-stone-300/30 rounded-[20px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-800/20">
                    <div className="space-y-12 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                            Get tactical guidance from a <br className="hidden md:block" /> Titan advisor
                        </h2>
                        <button className="bg-gradient-to-b from-white to-stone-300 text-black px-8 py-4 rounded-full text-xs font-bold tracking-wider hover:opacity-90 transition-opacity">
                            TALK TO AN ADVISOR &rarr;
                        </button>
                    </div>
                    {/* Placeholder for the empty graphic block */}
                    <div className="w-full md:w-72 h-72 bg-neutral-800 rounded-3xl" aria-label="CTA graphic placeholder" />
                </section>

            </main>
        </div>
    );
}