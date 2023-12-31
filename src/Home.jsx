import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProductList from './components/FeaturedProductList'
import BestSellerProductList from './components/BestSellerProductList'

export default function Home() {
    return (
        <>
            <div className="bg-white">
                {/* Hero section */}
                <div className="relative bg-gradient-to-tl from-white via-slate-200 to-gray-200">
                    {/* Navigation */}
                    <Header />
                    <Hero />
                </div>
                <main>
                    <FeaturedProductList />
                    <BestSellerProductList />
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
                <Footer />
            </div>
        </>
    );
}