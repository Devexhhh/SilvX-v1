export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-8 py-6 h-24">
            <nav className="hidden md:flex items-center gap-12 bg-neutral-500 rounded-[30px] px-8 py-3">
                <a href="#offerings" className="text-base font-medium hover:text-stone-300">Offerings</a>
                <a href="#about" className="text-base font-medium hover:text-stone-300">About</a>
                <a href="#blog" className="text-base font-medium hover:text-stone-300">Blog</a>
            </nav>

            <div className="flex items-center gap-8 ml-auto">
                <button className="text-base font-medium hover:text-stone-300">Log In</button>
                <button className="bg-neutral-500 rounded-[30px] px-8 py-3 text-base font-medium hover:bg-neutral-400">
                    Join Titan
                </button>
            </div>
        </header>
    );
}