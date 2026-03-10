import React from "react";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-12 py-15 h-15">
            <nav className="hidden md:flex items-center justify-center gap-15 bg-neutral-500 rounded-[30px] px-10 py-2 mb-6">
                <a href="#offerings" className="text-sm font-normal hover:text-stone-300">
                    Offerings
                </a>
                <a href="#about" className="text-sm font-normal hover:text-stone-300">
                    About
                </a>
                <a href="#blog" className="text-sm font-normal hover:text-stone-300">
                    Blog
                </a>
            </nav>

            <div className="flex items-center gap-8 ml-auto mb-6">
                <button className="text-sm font-medium hover:text-stone-300">
                    Log In
                </button>

                <button className="bg-neutral-500 rounded-[30px] px-10 py-2 text-sm font-medium hover:bg-neutral-400 cursor-pointer">
                    Join Titan
                </button>
            </div>
        </header>
    );
}