import React from "react";

export default function CardsSection() {
    return (
        <section className="px-12 py-24 space-y-12 relative">

            <h2 className="text-4xl font-medium">
                Titan matters most for high-stakes decisions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[1, 2, 3].map((item) => (
                    <>
                        <div
                            key={item}
                            className="bg-white/30 rounded-[30px] h-48 p-8 hover:bg-white/40 transition-colors"
                        >
                            <h3 className="text-xl font-medium leading-snug">
                                Equity compensation <br />
                                becomes real money →
                            </h3>
                        </div>
                    </>
                ))}
            </div>

        </section>
    );
}