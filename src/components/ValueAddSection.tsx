export default function ValueAddSection() {
    return (
        <section className="p-12 md:p-24 space-y-16">
            <h2 className="text-4xl font-medium">How we add value</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                    <div className="w-12 h-10 flex items-center justify-center rounded-[10px] outline outline-[0.2px] outline-stone-300">
                        <span className="text-xl font-medium">1</span>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mt-2">See what’s at stake</h3>
                </div>
                <div className="md:col-span-7">
                    <p className="text-base font-medium leading-relaxed">
                        We haven’t come prepared. Before any decisions is made, we build a <br className="hidden lg:block" />
                        complete view of your financial picture - equity exposure, <br className="hidden lg:block" />
                        taxes, liquidity, and upcoming deadlines - so critical items <br className="hidden lg:block" />
                        aren’t missed
                    </p>
                </div>
            </div>
        </section>
    );
}