import FeaturedProductCard from "./FeaturedProductCard"
import collection1 from '../assets/images/collection1.png'
import collection2 from '../assets/images/collection2.png'
import collection3 from '../assets/images/collection3.png'

export default function FeaturedProductList() {
    return (
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Featured collections</h2>
            </div>
            <div className="mt-4 flow-root">
                <div className="-my-2">
                    <div className="relative box-content h-80  overflow-x-auto py-2 xl:overflow-visible">
                        <div className="absolute flex space-x-8 px-4 h-80 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-x-0 xl:px-0">
                            <FeaturedProductCard imgSrc={collection1} />
                            <FeaturedProductCard imgSrc={collection2} />
                            <FeaturedProductCard imgSrc={collection3} />
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
    );
}