export default function CardsSection() {
    return (
        <section className="p-12 md:p-24 space-y-12">
            <h2 className="text-4xl font-medium">Titan matters most for high-stakes decisions</h2>

            {/* The gap creates space, but if you want lines between them, use grid with gap-px and a bg color */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/30 rounded-[30px] h-48 p-6 flex flex-col justify-center hover:bg-white/40 transition-colors cursor-pointer">
                        <h3 className="text-xl font-medium leading-snug">
                            Equity compensation <br /> becomes real money &rarr;
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}