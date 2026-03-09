import { useState } from "react";

export default function Hero() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50">
            <header className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <div className="shrink-0">
                            <a
                                href="#"
                                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                <img
                                    className="w-auto h-8"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                                    alt="logo"
                                />
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {!expanded ? (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <a className="text-base font-medium text-gray-900 hover:text-opacity-50">
                                Features
                            </a>

                            <a className="text-base font-medium text-gray-900 hover:text-opacity-50">
                                Pricing
                            </a>

                            <a className="text-base font-medium text-gray-900 hover:text-opacity-50">
                                Automation
                            </a>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <a className="text-base font-medium text-gray-900 hover:text-opacity-50">
                                Customer Login
                            </a>

                            <a className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                                Sign up
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav>
                            <div className="px-1 py-8 grid gap-y-7">
                                <a className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">
                                    Features
                                </a>

                                <a className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">
                                    Pricing
                                </a>

                                <a className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">
                                    Automation
                                </a>

                                <a className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">
                                    Customer Login
                                </a>

                                <a className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                                    Sign up
                                </a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">

                        <h1 className="px-6 text-lg text-gray-600">
                            Smart email campaign builder, made for Developers
                        </h1>

                        <p className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            Turn your visitors into profitable{" "}
                            <span className="relative inline-flex">
                                <span className="bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30 absolute inset-0"></span>
                                <span className="relative">business</span>
                            </span>
                        </p>

                        <div className="mt-9 sm:flex sm:justify-center sm:space-x-5">
                            <a className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                                Get more customers
                            </a>

                            <a className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 sm:mt-0 rounded-xl hover:bg-gray-900 hover:text-white">
                                Watch free demo
                            </a>
                        </div>

                        <p className="mt-8 text-base text-gray-500">
                            60 Days free trial · No credit card required
                        </p>
                    </div>
                </div>

                <div className="pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50"></div>

                        <div className="relative mx-auto lg:max-w-6xl">
                            <img
                                className="transform scale-110"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                                alt="hero"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}