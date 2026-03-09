export default function StatsSection() {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-neutral-500/50">
            <div className="p-12 md:p-24 flex items-center">
                <p className="text-lg font-medium leading-relaxed">
                    Titan helps you navigate equity decisions, liquidity events, and career
                    transitions - with a dedicated human advisor and a modern platform.
                </p>
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-500/50 p-12 md:p-24">
                <div className="px-6 flex flex-col justify-center">
                    <p className="text-stone-300 text-lg font-medium mb-2">Assets Under Management</p>
                    <p className="text-4xl font-medium tracking-[10.8px]"><span className="tracking-normal">$</span>1.1B</p>
                </div>
                <div className="px-6 flex flex-col justify-center">
                    <p className="text-stone-300 text-lg font-medium mb-2">All-in Advisory Fee</p>
                    <p className="text-4xl font-medium tracking-[7.2px]">0.4%</p>
                </div>
                <div className="px-6 flex flex-col justify-center">
                    <p className="text-stone-300 text-lg font-medium mb-2">Flat Fee</p>
                    <p className="text-4xl font-medium">$0</p>
                </div>
            </div>
        </section>
    );
}