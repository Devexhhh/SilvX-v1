export default function ValueSection() {
    return (
        <section className="px-8 py-6 space-y-16">

            <h2 className="text-4xl font-medium">
                How we add value
            </h2>
            <div className="h-[0.2px] w-full">
                <div className="h-full w-full bg-zinc-500/50" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">

                <div className="w-24 h-9 flex items-center justify-start rounded-[10px] border border-zinc-500">
                    <span className="text-xl font-medium px-4">1</span>
                </div>

                <div className="md:w-1/3">
                    <h3 className="text-xl font-medium mt-1">
                        See what’s at stake
                    </h3>
                </div>

                <div className="md:w-1/2">
                    <p className="text-base font-medium leading-relaxed text-stone-200">
                        We haven’t come prepared. Before any decision is made, we build a
                        complete view of your financial picture — equity exposure,
                        taxes, liquidity, and upcoming deadlines — so critical items
                        aren’t missed.
                    </p>
                </div>

            </div>

        </section>
    );
}