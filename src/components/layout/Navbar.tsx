import React, { useEffect, useState } from "react";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full flex justify-center transition-all duration-300
            ${scrolled
                    ? "fixed top-6 left-0 z-50"
                    : "relative"}
            `}
        >

            <div
                className={`
                flex items-center justify-between px-10 py-3 gap-170
                rounded-full transition-all duration-300
                ${scrolled
                        ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                        : "bg-transparent"}
                `}
            >

                <nav className="hidden md:flex items-center gap-12 bg-zinc-600 border border-zinc-500 rounded-4xl px-12 py-2">
                    <a href="#offerings" className="text-sm hover:text-stone-300">
                        Offerings
                    </a>
                    <a href="#about" className="text-sm hover:text-stone-300">
                        About
                    </a>
                    <a href="#blog" className="text-sm hover:text-stone-300">
                        Blog
                    </a>
                </nav>

                <div className="flex items-center gap-6">

                    <button className="text-sm cursor-pointer hover:text-stone-300">
                        Log In
                    </button>

                    <button className="bg-neutral-500 rounded-full cursor-pointer px-8 py-2 text-sm hover:bg-zinc-500">
                        Join Titan
                    </button>
                </div>
            </div>
        </header>
    );
}