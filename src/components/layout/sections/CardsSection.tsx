import React from "react";

export default function CardsSection() {
    return (
        <section className="px-8 py-6 space-y-12 relative mb-20">

            <h2 className="text-4xl font-medium">
                Titan matters most for high-stakes decisions
            </h2>

            {/* Grid with divider columns */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 items-stretch">

                {/* Card 1 */}
                <div className="bg-white/30 rounded-[30px] h-56 p-8 cursor-pointer hover:bg-white/40 transition-colors">
                    <h3 className="text-xl font-semibold leading-snug">
                        Equity compensation <br />
                        becomes real money →
                    </h3>
                </div>

                {/* Divider */}
                <div className="hidden md:flex justify-center">
                    <div className="w-[0.2px] h-full bg-zinc-500/50"></div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/30 rounded-[30px] h-56 p-8 cursor-pointer hover:bg-white/40 transition-colors">
                    <h3 className="text-xl font-semibold leading-snug">
                        Equity compensation <br />
                        becomes real money →
                    </h3>
                </div>

                {/* Divider */}
                <div className="hidden md:flex justify-center">
                    <div className="w-[0.2px] h-full bg-zinc-500/50"></div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/30 rounded-[30px] h-56 p-8 cursor-pointer hover:bg-white/40 transition-colors">
                    <h3 className="text-xl font-semibold leading-snug">
                        Equity compensation <br />
                        becomes real money →
                    </h3>
                </div>

            </div>

        </section>
    );
}