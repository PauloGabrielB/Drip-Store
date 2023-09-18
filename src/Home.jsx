import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    UserIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import tenis3 from './assets/images/tenis3.png'
import tenis2 from './assets/images/tenis2.png'
import logo from './assets/images/logo.png'
import collection1 from './assets/images/collection1.png'
import collection2 from './assets/images/collection2.png'
import collection3 from './assets/images/collection3.png'

export default function Home() {
    return (
        <>
            <div className="bg-white">
                {/* Hero section */}
                <div className="relative bg-gradient-to-tl from-white via-slate-200 to-gray-200">
                    {/* Navigation */}
                    <header className="relative z-10 mx-auto max-w-7xl">
                        <nav aria-label="Top">
                            <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                                {/* Top navigation */}
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <div>
                                        <div className="flex h-28 items-center justify-between">
                                            {/* Logo (lg+) */}
                                            <div className="hidden md:flex md:flex-1 md:items-center">
                                                <a href="#" className='flex flex-row space-x-3'>
                                                    <img className="h-10 w-auto" src={logo} alt="" />
                                                    <span className="text-4xl font-semibold text-pink-700">Drip Store</span>
                                                </a>
                                            </div>
                                            <div className="flex flex-1 items-center justify-center px-2 sm:inset-0">
                                                <div className="w-full sm:max-w-xs">
                                                    <label htmlFor="search" className="sr-only">Search</label>
                                                    <div className="relative">
                                                        <input id="search" name="search" className="block w-full rounded-md border border-gray-200 drop-shadow bg-gray-200 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <MagnifyingGlassIcon className="h-5 w-5 text-pink-700" aria-hidden="true" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-center justify-end">
                                                <a href="#" className="hidden text-md font-normal text-pink-700 lg:block">Sign in</a>

                                                <div className="flex items-center lg:ml-8">
                                                    <a href="#" className="p-2 text-pink-700 lg:hidden">
                                                        <span className="sr-only">Sign in</span>
                                                        <UserIcon className="h-6 w-6 text-pink-700" aria-hidden="true" />
                                                    </a>
                                                    <a href="#" className="hidden text-md font-normal text-pink-700 lg:block">Create an account</a>

                                                    {/* Cart */}
                                                    <div className="ml-4 flow-root lg:ml-8">
                                                        <a href="#" className="group -m-2 flex items-center p-2">
                                                            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-pink-700" aria-hidden="true" />
                                                            <span className="ml-2 text-md font-medium text-pink-700">0</span>
                                                            <span className="sr-only">items in cart, view bag</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Secondary navigation */}
                                <div className="py-4 space-x-4">
                                    <a href="#" className="inline-flex items-center border-b-2 border-pink-700 px-1 pt-1 text-xl font-normal text-gray-900">Home</a>
                                    <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-normal text-gray-500 hover:border-gray-300 hover:text-gray-700">Products</a>
                                    <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-normal text-gray-500 hover:border-gray-300 hover:text-gray-700">Categories</a>
                                    <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-normal text-gray-500 hover:border-gray-300 hover:text-gray-700">Orders</a>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className='relative mx-auto max-w-7xl flex'>
                        {/* Texts and buttons */}
                        <div className="relative mx-auto flex max-w-lg flex-col items-start px-6 py-32 text-left sm:py-64 lg:px-0">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">New arrivals are here 🔥</h1>
                            <p className="mt-4 text-xl text-gray-900">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
                            <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-pink-700 px-8 py-3 text-base font-medium text-gray-100 hover:bg-gray-900">Shop New Arrivals</a>
                        </div>
                        {/* Decorative image and overlay */}
                        <div aria-hidden="true" className="inset-0 overflow-hidden">
                            <img src={tenis3} alt="" className="h-full w-full object-cover object-center " />
                        </div>
                    </div>
                </div>
                <main>
                    {/* Category section */}
                    <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Featured collections</h2>
                        </div>
                        <div className="mt-4 flow-root">
                            <div className="-my-2">
                                <div className="relative box-content h-80  overflow-x-auto py-2 xl:overflow-visible">
                                    <div className="absolute flex space-x-8 px-4 h-80 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                        <div href="#" className="relative flex space-y-10 h-80 w-96 flex-col overflow-hidden rounded-lg p-6 xl:w-auto bg-indigo-100">
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img src={collection1} alt="" className="h-full w-full object-cover object-center" />
                                            </span>
                                            <span className="absolute top-0 left-4 items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">30% OFF</span>
                                            <div className='absolute bottom-8 flex flex-col space-y-4'>
                                                <span className="text-left text-3xl font-bold text-gray-900">New Arrivals</span>
                                                <span className="justify-start" aria-hidden="true">
                                                    <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-700 hover:bg-gray-900">Take a look</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div href="#" className="relative flex space-y-10 h-80 w-96 flex-col overflow-hidden rounded-lg p-6 xl:w-auto bg-indigo-100">
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img src={collection2} alt="" className="h-full w-full object-cover object-center" />
                                            </span>
                                            <span className="absolute top-0 left-4 items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">30% OFF</span>
                                            <div className='absolute bottom-8 flex flex-col space-y-4'>
                                                <span className="text-left text-3xl font-bold text-gray-900">New Arrivals</span>
                                                <span className="justify-start" aria-hidden="true">
                                                    <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-700 hover:bg-gray-900">Take a look</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div href="#" className="relative flex space-y-10 h-80 w-96 flex-col overflow-hidden rounded-lg p-6 xl:w-auto bg-indigo-100">
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img src={collection3} alt="" className="h-full w-full object-cover object-center" />
                                            </span>
                                            <span className="absolute top-0 left-4 items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">30% OFF</span>
                                            <div className='absolute bottom-8 flex flex-col space-y-4'>
                                                <span className="text-left text-3xl font-bold text-gray-900">New Arrivals</span>
                                                <span className="justify-start" aria-hidden="true">
                                                    <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-700 hover:bg-gray-900">Take a look</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 px-4 sm:hidden">
                            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                Browse all categories
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </section>
                    <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Best sellers</h2>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={tenis2}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                Air Jordan
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">White</p>
                                    </div>
                                    <p className="text-3xl font-medium text-gray-900">12</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
                                    <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                                        30% OFF
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={tenis2}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                Air Jordan
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">White</p>
                                    </div>
                                    <p className="text-3xl font-medium text-gray-900">12</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
                                    <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                                        30% OFF
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={tenis2}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                Air Jordan
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">White</p>
                                    </div>
                                    <p className="text-3xl font-medium text-gray-900">12</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
                                    <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                                        30% OFF
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={tenis2}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                Air Jordan
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">White</p>
                                    </div>
                                    <p className="text-3xl font-medium text-gray-900">12</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
                                    <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                                        30% OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured section */}
                    <section aria-labelledby="social-impact-heading" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
                        <div className="relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0">
                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                    <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        <span className="block sm:inline">Level up</span>
                                        <span className="block sm:inline">your desk</span>
                                    </h2>
                                    <p className="mt-3 text-xl text-white">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</p>
                                    <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Workspace</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Collection section */}
                    <section aria-labelledby="collection-heading" className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                        <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
                        <p className="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

                        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                            <a href="#" className="group block">
                                <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Brown leather key ring with brass metal loops and rivets on wood table." className="h-full w-full object-cover object-center" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
                                <p className="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
                            </a>
                            <a href="#" className="group block">
                                <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg" alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." className="h-full w-full object-cover object-center" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
                                <p className="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
                            </a>
                            <a href="#" className="group block">
                                <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg" alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." className="h-full w-full object-cover object-center" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                                <p className="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
                            </a>
                        </div>
                    </section>

                    {/* Featured section */}
                    <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0">
                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                    <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
                                    <p className="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
                                    <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Focus</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

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
            </div>
        </>
    );
}