export default function Footer() {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">

                    {/* Logo + description */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt="logo"
                        />

                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        {/* Social icons */}
                        <ul className="flex items-center space-x-3 mt-9">

                            {/* Twitter */}
                            <li>
                                <a className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809..." />
                                    </svg>
                                </a>
                            </li>

                            {/* Facebook */}
                            <li>
                                <a className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548..." />
                                    </svg>
                                </a>
                            </li>

                            {/* Instagram */}
                            <li>
                                <a className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248..." />
                                        <circle cx="16.806" cy="7.207" r="1.078" />
                                    </svg>
                                </a>
                            </li>

                            {/* Github */}
                            <li>
                                <a className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974..."
                                        />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Company
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li><a className="flex text-base text-black hover:text-blue-600">About</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Features</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Works</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Career</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Help
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li><a className="flex text-base text-black hover:text-blue-600">Customer Support</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Delivery Details</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Terms & Conditions</a></li>
                            <li><a className="flex text-base text-black hover:text-blue-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Subscribe to newsletter
                        </p>

                        <form className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">
                    © Copyright 2021, All Rights Reserved by Postcraft
                </p>
            </div>
        </section>
    );
}