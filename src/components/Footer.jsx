export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-gray-900">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                            <div>
                                <h3 className="text-sm font-medium text-white">Shop</h3>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Bags</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Tees</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Objects</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Home Goods</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Accessories</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Who we are</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Sustainability</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Press</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                            <div>
                                <h3 className="text-sm font-medium text-white">Account</h3>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Manage Account</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Redeem a Gift Card</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-white">Connect</h3>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                                    </li>
                                    <li className="text-sm">
                                        <a href="#" className="text-gray-300 hover:text-white">Pinterest</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16 xl:mt-0">
                        <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
                        <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
                        <form className="mt-2 flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" type="text" autoComplete="email" required className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900" />
                            <div className="ml-4 flex-shrink-0">
                                <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-10">
                    <p className="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
                </div>
            </div>
        </footer>
    );
}