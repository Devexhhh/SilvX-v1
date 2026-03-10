import React from "react";

import Navbar from "./layout/Navbar";

import HeroSection from "./layout/sections/HeroSection";
import StatsSection from "./layout/sections/StatsSection";
import CardsSection from "./layout/sections/CardsSection";
import ValueSection from "./layout/sections/ValueSection";
import CTASection from "./layout/sections/CTASection";

import HorizontalLine from "./ui/HorizontalLine";
import SplitHorizontalLine from "./ui/SplitHorizontalLine";

export default function Hero() {
    return (
        <div className="min-h-screen w-full bg-zinc-900 text-white overflow-hidden">

            <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col">

                <div className="absolute left-0 top-0 bottom-0 w-[0.2px] bg-zinc-500/50" />
                <div className="absolute right-0 top-0 bottom-0 w-[0.2px] bg-zinc-500/50" />

                <Navbar />

                <SplitHorizontalLine />

                <HeroSection />

                <HorizontalLine />

                <StatsSection />

                <HorizontalLine />

                <CardsSection />

                <HorizontalLine />

                <ValueSection />

                <HorizontalLine />

                <CTASection />

            </div>

        </div>
    );
}